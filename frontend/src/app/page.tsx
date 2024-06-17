
import InformationLine from "./components/InformationLine";
import bg_body from "@/public/bgbody3.svg"
import Banner from "./components/Banner";
import HomeCategories from "./components/HomeCategories";
import BannerWithBlur from "./components/BannerWithBlur";
import ExpandingCards from "./components/ExpandingCards";
import HomeProducts from "./components/HomeProducts";
import Title from "./components/Title";
import LeftTitle from "./components/LeftTitle";
import GridCards from "./components/GridCards";
import { Suspense } from "react";
import LoadingSvg from "./components/LoadingSvg";

export default function Home() {
  const defaultEase = [0.6, 0.01, -0.05, 0.9];
  const imageAnimation = {
    to: {
      width: "100%",
      height: 500,
      y: "115px",
      //
      transition: {
        duration: 1.4,
        ease: defaultEase,
        delay: 0.5,
      },
    },
  };
  const textAnimation = {
    from: { opacity: 0, x: 20 },
    to: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
        delay: 1.5,
      },
    },
  };
  const collectionListAnimation = {
    from: { opacity: 0 },
    to: { opacity: 1, transition: { delay: 2 } },
  };
  const SuspensFallback=<div className="w-full flex items-center justify-center">
  <LoadingSvg/>
  </div>

  return (
    <main className="bg-[#f2e8d9] pb-[60px] " style={{ 'backgroundImage': `url(${bg_body.src})`}}>
      <Banner imageAnimation={imageAnimation} textAnimation={textAnimation}/>
      


      <InformationLine homePage={true} collectionListAnimation={collectionListAnimation}/>
      <ExpandingCards/>
      
     
      <HomeCategories collectionListAnimation={collectionListAnimation}/>
      <LeftTitle/>
      
      <Suspense fallback={SuspensFallback} >
      <HomeProducts/>
      </Suspense>
      
      
      <BannerWithBlur/>
      <Title/>
      
      <GridCards/>
   
      
      


    </main>
  );
}
