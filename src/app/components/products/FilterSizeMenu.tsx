import React, { useState } from 'react'
import { Checkbox, FormControlLabel, Slider } from '@mui/material'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useAutoAnimate } from '@/src/app/functions/useanimate';
import { useRouter } from 'next/navigation';
import { TFilterattributes } from '../../typing/global';
import { convertToUrlSearchParams } from '../../functions/utils';



const FilterSizeMenu = ({searchParams}:{searchParams:TFilterattributes}) => {
    const router =useRouter();
    const [parent] = useAutoAnimate();
    const [showmenu, setshowmenu] = useState(true);
    const [valueLength, setValueLength] = useState([0, 10000]);
    const [valueDepth, setValueDepth] = useState([0, 10000]);
    const [valueWidth, setValueWidth] = useState([0, 10000]);

    const handleChangeLength = (event:any, newValue:any) => {
        setValueLength(newValue);
        
    };
    const handleChangeDepth = (event:any, newValue:any) => {
        setValueDepth(newValue);
      
    };
    const handleChangeWidth = (event:any, newValue:any) => {
        setValueWidth(newValue);
        
    };
    const handleValidation=()=>{

        let url=searchParams;
        const randomId =Math.random()* 100;
       
    
        delete url["mindepth"];
        delete url["minlength"];
        delete url["minwidth"];
        delete url["maxdepth"];
        delete url["maxlength"];
        delete url["maxwidth"];

        const convertedUrl = convertToUrlSearchParams(url);
    
        const searchparams="?"+new URLSearchParams(convertedUrl).toString();
       
    
        router.push(`/products${searchparams}&mindepth=${valueDepth[0]}&maxdepth=${valueDepth[1]}&minlength=${valueLength[0]}&maxlength=${valueLength[1]}&minwidth=${valueWidth[0]}&maxwidth=${valueWidth[1]}`,{scroll:false});

    }


    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 10,
            label: '10',
        },
    ];
    const styles={style:{paddingBottom:'20px'}}
    return (
        <div ref={parent} className='border-[#c9c9d2] border-b border-solid mb-5 relative filter_price_menu' {... showmenu&&styles} >
            <h2 className='text-[1.5em] font-normal font-sans mb-5 cursor-pointer relative' onClick={() => { setshowmenu((prev) => !prev); }}> Size {showmenu ? <IoIosArrowDown className='absolute right-0 top-[7px]' /> : <IoIosArrowForward className='absolute right-0 top-[7px]' />}</h2>
            {showmenu &&
                    <>
                    <h3 className='text-[1.2em] font-light font-sans relative' > Length </h3>
                    <Slider className='my-2' sx={{ color: '#A37A74', }} max={10} marks={marks} value={valueLength} onChange={handleChangeLength} valueLabelDisplay="auto" />
                    <h3 className='text-[1.2em] font-light font-sans  relative' > Depth </h3>
                    <Slider className='my-2' sx={{ color: '#A37A74', }} max={10} marks={marks} value={valueDepth} onChange={handleChangeDepth} valueLabelDisplay="auto" />
                    <h3 className='text-[1.2em] font-light font-sans  relative' > Width </h3>
                    <Slider className='my-2' sx={{ color: '#A37A74', }} max={10} marks={marks} value={valueWidth} onChange={handleChangeWidth} valueLabelDisplay="auto" />
                    <div className='text-center'>
                    <button onClick={()=>handleValidation()} className="mx-auto mt-2 bg-[#A37A74] rounded-[3px] text-white no-underline px-5 py-3 font-medium border-[#A37A74] border-solid border-[1px] "> validate</button> 
                    </div>
                    </> 
                       
                
                
                }


        </div>
    )
}

export default FilterSizeMenu