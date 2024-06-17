import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CircleIcon from "@mui/icons-material/Circle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { fontSize } from "@mui/system";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useAutoAnimate } from "@/src/app/functions/useanimate";
import { useRouter } from "next/navigation";
import { TFilterattributes } from "../../typing/global";
import { convertToUrlSearchParams } from "../../functions/utils";
const FilterColorsMenu = ({
  searchParams,
  setcolorsFilter,
  colorsFilter,
}: {
  searchParams: TFilterattributes;
  colorsFilter: string;
  setcolorsFilter: any;
}) => {
  const router = useRouter();

  const [parent] = useAutoAnimate();
  const [showmenu, setshowmenu] = useState(true);
  const styles = { style: { paddingBottom: "20px" } };

  const handlechange = (
    event: React.ChangeEvent<HTMLInputElement>,
    color: String
  ) => {
    if (event.target.checked) {
      setcolorsFilter((prevColors: string) => prevColors + color + ",");
    } else {
      setcolorsFilter((prevColors: string) =>
        prevColors.replaceAll(color + ",", "")
      );
    }
  };
  const colors = [
    "black",
    "#006400",
    "#BC8F8F",
    "#1E90FF",
    "#ddcfc4",
    "#6B8E23",
    "#ffe41b",
    "#556B2F",
    "#6a5c59",
    "#722f37",
    "#E6E6FA",
    "#4682B4",
    "#a4c5b2",
    "#DCDCDC",
    "#708090",
    "#000080",
    "#8d6587",
    "#b3663a",
    "#FFC0CB",
    "#cabb97",
    "#c8a051",
  ];

  return (
    <div
      ref={parent}
      className="border-[#c9c9d2] border-b border-solid mb-5 relative filter_colors_menu"
      {...(showmenu && styles)}
    >
      <h2
        className="text-[1.5em] font-normal font-sans mb-5 cursor-pointer relative"
        onClick={() => {
          setshowmenu((prev) => !prev);
        }}
      >
        {" "}
        Colors{" "}
        {showmenu ? (
          <IoIosArrowDown className="absolute right-0 top-[7px]" />
        ) : (
          <IoIosArrowForward className="absolute right-0 top-[7px]" />
        )}
      </h2>
      {showmenu && (
        <>
          <div className="flex flex-wrap justify-center">
            {colors.map((color, index) => (
              <Checkbox
                key={index}
                checked={colorsFilter.includes(color) ? true : false}
                onChange={(event) => handlechange(event, color)}
                icon={<CircleIcon fontSize="medium" />}
                checkedIcon={<CheckCircleIcon fontSize="medium" />}
                sx={{ color: color, "&.Mui-checked": { color: color } }}
              />
            ))}
            <Checkbox
              key={30}
              checked={colorsFilter.includes('white') ? true : false}
              onChange={(event) => handlechange(event, "white")}
              icon={<CircleIcon  fontSize="medium" />}
              checkedIcon={<CheckCircleIcon sx={{color:"white"}} fontSize="medium" />}
              sx={{ color: 'white', "&.Mui-checked": { color: 'black' } }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FilterColorsMenu;
