import React, { useState } from "react";
import Select from "react-select";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useAutoAnimate } from "@/src/app/functions/useanimate";
import { useRouter } from "next/navigation";
import { TFilterattributes } from "../../typing/global";
import { convertToUrlSearchParams } from "../../functions/utils";

const SortMenu = ({ searchParams }: { searchParams: TFilterattributes }) => {
  const router = useRouter();

  const [parent] = useAutoAnimate();
  const [showmenu, setshowmenu] = useState(true);
  const options = [
    { value: "name", label: "Name (A to Z)" },
    { value: "rate", label: "best rated" },
    { value: "price-asc", label: "Price (Low to High)" },
    { value: "price-desc", label: "Price (High to Low)" },
  ];
 
  const selectValue = () => {
    if (!("sort" in searchParams)) {
      return { value: "default", label: "Sort by" };
    } else {
      switch (searchParams.sort) {
        case "name":
          return { value: "name", label: "Name (A to Z)" };
        case "rate":
          return { value: "rate", label: "best rated" };
        case "price-asc":
          return { value: "price-asc", label: "Price (Low to High)" };
        case "price-desc":
          return { value: "price-desc", label: "Price (High to Low)" };
          break;
          default:return { value: "name", label: "Name (A to Z)" };
      }
    }
  };
  const colourStyles = {
    control: (styles: any, { isFocused, isSelected }: any) => ({
      ...styles,
      color: "white",
      backgroundColor: "#4f4f5e",
      borderColor: isFocused ? "#A37A74" : "#4f4f5e", // Change to the desired color
      boxShadow: isFocused ? "0 0 0 1px #A37A74" : "none", // Change to the desired color
      "&:hover": {
        borderColor: "#A37A74", // Change to the desired color
      },
    }),
    option: (styles: any, state: any) => ({
      ...styles,
      backgroundColor: state.isFocused ? "#A37A74" : "#4f4f5e",
      color: "white",
      ":active": {
        ...styles[":active"],
        backgroundColor: "#A37A74",
      },
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "white",
    }),
    indicatorSeparator: (styles: any) => ({
      ...styles,
      backgroundColor: "white", // Change to the desired color
    }),
    dropdownIndicator: (styles: any) => ({
      ...styles,
      color: "white", // Change to the desired color
    }),
    menu: (styles: any) => ({
      ...styles,
      backgroundColor: "#4f4f5e",
    }),
    input: (styles: any) => ({ ...styles, color: "white" }),
  };

  const styles = { style: { paddingBottom: "20px" } };
  const handleSelect = (e: any) => {
    let url = searchParams;

    url.sort = e.value;
    const convertedUrl = convertToUrlSearchParams(url);
    const searchparams = "?" + new URLSearchParams(convertedUrl).toString();

    router.push(`/products${searchparams}`, { scroll: false });
  };

  return (
    <div
      ref={parent}
      className="border-[#c9c9d2] border-b border-solid mb-5 relative sort_by_menu"
      {...(showmenu && styles)}
    >
      <h2
        className="text-[1.5em] font-normal font-sans mb-5 cursor-pointer relative"
        onClick={() => {
          setshowmenu((prev) => !prev);
        }}
      >
        {" "}
        Sort{" "}
        {showmenu ? (
          <IoIosArrowDown className="absolute right-0 top-[7px]" />
        ) : (
          <IoIosArrowForward className="absolute right-0 top-[7px]" />
        )}
      </h2>
      {showmenu && (
        <Select
          onChange={(e) => handleSelect(e)}
          styles={colourStyles}
          value={selectValue()}
          options={options}
          className="w-full text-white"
        />
      )}
    </div>
  );
};

export default SortMenu;
