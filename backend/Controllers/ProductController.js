const { FavoriteProducts } = require("../models/FavoriteProducts");
const { Product } = require("../models/Product");
var mongoose = require("mongoose");

const CreateProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      price,
      first_category,
      colors,
      second_category,
      quantity,
      main_images,
      image_without_bg,
      colors_images,
    } = req.body;

    const newProduct = new Product({
      productName: productName,
      description: description,
      price: price,
      first_category: first_category,
      colors: colors,
      second_category: second_category,
      quantity: quantity,
      main_images: main_images,
      colors_images: colors_images,
      image_without_bg: image_without_bg,
    });
    const result = await newProduct.save();

    res.status(201).json({ sucess: `new product created` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const ShowProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const UpdateProduct = async (req, res) => {};
const DeleteProduct = async (req, res) => {
  const deleteProduct = Product.findByIdAndDelete(req.body.id)
    .then(() => res.status(201).json({ sucess: `Product deleted` }))
    .catch((err) => res.status(500).json({ message: err.message }));
};

/*
const BuyProduct= async (req, res) => {
    const {product_id,quantity} = req.body;
    const updateQuery = { _id: product_id };
const updateOperation = { $inc: { quantity: -1 } };
    const buyprodect= Product.updateOne(updateQuery, updateOperation)
    .then(() => res.status(201).json({ sucess: `Product quantity updated` }))
    .catch((err) => res.status(500).json({ message: err.message }))
}*/

const ShowProductbyid = async (req, res) => {
  try {
    const product = await Product.aggregate([
      {
        $match: {
          $expr: { $eq: [{ $toString: "$_id" }, req.query.productId] }, // Match products by productId
        },
      },
      {
        $lookup: {
          from: "favoriteproducts",
          localField: "_id",
          foreignField: "products._id",
          as: "favoritedBy",
        },
      },
      {
        $addFields: {
          productId: { $toString: "$_id" }, // Convert _id to string for matching
          favoritedBy: {
            $map: {
              input: "$favoritedBy",
              as: "fav",
              in: "$$fav.user._id", // Extract user IDs from each user object
            },
          },
        },
      },
      {
        $lookup: {
          from: "ratings", // Name of the ratings collection
          let: { productId: "$productId" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$productId", "$$productId"] },
              },
            },
          ],
          as: "ratings", // Field name to store the ratings for the product
        },
      },
      {
        $addFields: {
          averageRating: {
            $cond: {
              if: { $gt: [{ $size: "$ratings" }, 0] }, // Check if there are ratings
              then: { $avg: "$ratings.note" }, // Calculate average rating if ratings exist
              else: 2, // Otherwise, set average rating to 0
            },
          },
        },
      },
    ]).exec();

    res.status(200).json(product[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const FilterProducts = async (req, res) => {
  try {
    const {
      onsale,
      userId,
      favorite,
      productName,
      min_price,
      max_price,
      first_category,
      second_category,
      colors,
      minwidth,
      minlength,
      mindepth,
      maxwidth,
      maxlength,
      maxdepth,
      sort,
      limit,
    } = req.query;

    const query = {};

    if (productName != undefined) {
      query.productName = { $regex: `^${productName}` };
    }
    if (first_category != undefined) {
      query.first_category = first_category;
    }
    if (second_category != undefined) {
      query.second_category = second_category;
    }

    if (colors != undefined) {
      let colorsArray = colors?.split(",");
      colorsArray.pop();
      if (colorsArray != undefined) {
        query.colors = { $in: colorsArray ? colorsArray : [] };
      }
    }

    if (min_price != undefined && max_price != undefined) {
      query.price = {
        $lte: parseFloat(max_price),
        $gte: parseFloat(min_price),
      };
    }
    if (minwidth != undefined && maxwidth != undefined) {
      query.width = { $lte: parseFloat(maxwidth), $gte: parseFloat(minwidth) };
    }
    if (mindepth != undefined && maxdepth != undefined) {
      query.depth = { $lte: parseFloat(maxdepth), $gte: parseFloat(mindepth) };
    }
    if (minlength != undefined && maxlength != undefined) {
      query.length = {
        $lte: parseFloat(maxlength),
        $gte: parseFloat(minlength),
      };
    }
    if (onsale != undefined) {
      query.sale = { $gt: -1 };
    }

    if (favorite != undefined) {
      if (userId == undefined) {
        return res.status(404).json({ message: "User undefined" });
      }

      const existed_favorites_products = await filterAndGetFavoriteProducts(
        sort,
        query,
        userId
      );

      if (!existed_favorites_products) {
        return res
          .status(201)
          .json({ message: `user has no products in favorite` });
      } else {
        return res.status(200).json(existed_favorites_products);
      }
    }

    const final_products = await filterAndGetProducts(sort, query, limit);

    return res.status(200).json(final_products);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  CreateProduct,
  ShowProducts,
  UpdateProduct,
  DeleteProduct,
  FilterProducts,
  ShowProductbyid,
};

const filterAndGetProducts = async (sort, query, limit) => {
  let pipeline = [
    { $match: query },
    {
      $lookup: {
        from: "favoriteproducts",
        localField: "_id",
        foreignField: "products._id",
        as: "favoritedBy",
      },
    },
    {
      $addFields: {
        productId: { $toString: "$_id" }, // Convert _id to string for matching
        favoritedBy: {
          $map: {
            input: "$favoritedBy",
            as: "fav",
            in: "$$fav.user._id", // Extract user IDs from each user object
          },
        },
      },
    },
    {
      $lookup: {
        from: "ratings", // Name of the ratings collection
        let: { productId: "$productId" },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ["$productId", "$$productId"] },
            },
          },
        ],
        as: "ratings", // Field name to store the ratings for the product
      },
    },
    {
      $addFields: {
        averageRating: {
          $cond: {
            if: { $gt: [{ $size: "$ratings" }, 0] }, // Check if there are ratings
            then: { $avg: "$ratings.note" }, // Calculate average rating if ratings exist
            else: 2, // Otherwise, set average rating to 2
          },
        },
      },
    },
  ];

  if (sort != undefined) {
    let sortagregate = {};
    if (sort == "name") {
      sortagregate.productName = 1;
    }
    if (sort == "price-desc" || sort == "price-asc") {
      pipeline.push({
        $addFields: {
          newPrice: {
            $cond: {
              if: { $eq: ["$sale", -1] }, // If sale is -1, use price
              then: "$price",
              else: "$sale", // If sale is not -1, use sale as new price
            },
          },
        },
      });
      if (sort == "price-asc") {
        sortagregate.newPrice = 1;
      } else {
        sortagregate.newPrice = -1;
      }
    }
    if (sort == "rate") {
      sortagregate.averageRating = -1;
    }
    pipeline.push({ $sort: sortagregate });

    if (sort == "price-desc" || sort == "price-asc") {
      pipeline.push({
        $project: {
          newPrice: 0,
        },
      });
    }
  }
  if (limit) {
    pipeline.push({ $limit: parseInt(limit) });
  }

  const products = await Product.aggregate(pipeline).exec();

  return products;
};

const filterAndGetFavoriteProducts = async (sort, query, userId) => {
  let pipeline = [
    { $match: query },
    {
      $lookup: {
        from: "favoriteproducts",
        localField: "_id",
        foreignField: "products._id",
        as: "favoritedBy",
      },
    },
    {
      $addFields: {
        productId: { $toString: "$_id" }, // Convert _id to string for matching
      },
    },
    {
      $lookup: {
        from: "ratings", // Name of the ratings collection
        let: { productId: "$productId" },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ["$productId", "$$productId"] },
            },
          },
        ],
        as: "ratings", // Field name to store the ratings for the product
      },
    },
    {
      $addFields: {
        averageRating: {
          $cond: {
            if: { $gt: [{ $size: "$ratings" }, 0] }, // Check if there are ratings
            then: { $avg: "$ratings.note" }, // Calculate average rating if ratings exist
            else: 2, // Otherwise, set average rating to 0
          },
        },
      },
    },
    {
      $match: {
        $expr: {
          $in: [
            userId,
            {
              $map: {
                input: "$favoritedBy",
                as: "fav",
                in: { $toString: "$$fav.user._id" },
              },
            },
          ],
        },
      },
    },
    {
      $addFields: {
        favoritedBy: {
          $map: {
            input: "$favoritedBy",
            as: "fav",
            in: "$$fav.user._id", // Extract user IDs from each user object
          },
        },
      },
    },
  ];

  if (sort != undefined) {
    let sortagregate = {};
    if (sort == "name") {
      sortagregate.productName = 1;
    }
    if (sort == "price-desc" || sort == "price-asc") {
      pipeline.push({
        $addFields: {
          newPrice: {
            $cond: {
              if: { $eq: ["$sale", -1] }, // If sale is -1, use price
              then: "$price",
              else: "$sale", // If sale is not -1, use sale as new price
            },
          },
        },
      });
      if (sort == "price-asc") {
        sortagregate.newPrice = 1;
      } else {
        sortagregate.newPrice = -1;
      }
    }
    if (sort == "rate") {
      sortagregate.averageRating = -1;
    }
    pipeline.push({ $sort: sortagregate });

    if (sort == "price-desc" || sort == "price-asc") {
      pipeline.push({
        $project: {
          newPrice: 0,
        },
      });
    }
  }

  const products = await Product.aggregate(pipeline).exec();

  return products;
};
