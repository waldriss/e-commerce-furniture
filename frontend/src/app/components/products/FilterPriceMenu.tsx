import React, { useState } from "react";
import { Checkbox, FormControlLabel, Slider } from "@mui/material";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useAutoAnimate } from "@/src/app/functions/useanimate";
import { useRouter } from "next/navigation";
import { TFilterattributes } from "../../typing/global";
import { convertToUrlSearchParams } from "../../functions/utils";

const FilterPriceMenu = ({
  searchParams,
}: {
  searchParams: TFilterattributes;
}) => {
  const router = useRouter();
  const [parent] = useAutoAnimate();
  const [showmenu, setshowmenu] = useState(true);
  const [value, setValue] = useState([0, 1000]);
  const [isOnSale, setisOnSale] = useState(false);
  const handleCheck = (event: any) => {
    setisOnSale(event.target.checked);
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  const handleValidation = () => {
    let url = searchParams;

    delete url["max_price"];
    delete url["min_price"];
    delete url["onsale"];
    if (isOnSale) {
      url.onsale = "1";
    }
    const convertedUrl = convertToUrlSearchParams(url);

    const searchparams = "?" + new URLSearchParams(convertedUrl).toString();

    router.push(
      `/products${searchparams}&min_price=${value[0]}&max_price=${value[1]}`,
      { scroll: false }
    );
  };
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1000,
      label: "1000",
    },
  ];
  const styles = { style: { paddingBottom: "20px" } };
  return (
    <div
      ref={parent}
      className="border-[#c9c9d2] border-b border-solid mb-5 relative filter_price_menu"
      {...(showmenu && styles)}
    >
      <h2
        className="text-[1.5em] font-normal font-sans mb-5 cursor-pointer relative"
        onClick={() => {
          setshowmenu((prev) => !prev);
        }}
      >
        {" "}
        Price{" "}
        {showmenu ? (
          <IoIosArrowDown className="absolute right-0 top-[7px]" />
        ) : (
          <IoIosArrowForward className="absolute right-0 top-[7px]" />
        )}
      </h2>
      {showmenu && (
        <>
          <FormControlLabel
            onChange={handleCheck}
            checked={isOnSale}
            control={
              <Checkbox
                sx={{ color: "#A37A74", "&.Mui-checked": { color: "#A37A74" } }}
              />
            }
            label="On sale"
          />
          <Slider
            sx={{ color: "#A37A74" }}
            max={1000}
            marks={marks}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
          <div className="text-center">
            <button
              onClick={() => handleValidation()}
              className="mx-auto mt-2 bg-[#A37A74] rounded-[3px] text-white no-underline px-5 py-3 font-medium border-[#A37A74] border-solid border-[1px] "
            >
              {" "}
              validate
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterPriceMenu;
