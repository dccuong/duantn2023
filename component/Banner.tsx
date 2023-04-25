import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getSlider } from "../redux/sliderSlice";
// const contentStyle: React.CSSProperties = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };
type Prop = {
  hight: string;
};

const Banner: any = (prop: Prop) => {
    const slide = useSelector((state: RootState) => state.slider.slider);
    const dispatch = useDispatch<any>();
    useEffect(() => {
      dispatch(getSlider("6447f6881a058cfede157174"));
    }, [dispatch]);
    console.log(slide, "Sss");
  return (
    <Carousel autoplay>
      <div className="">
        <img src={slide?.url1} alt="" className={"w-[100%] lg:h-screen "} />
      </div>
      <div className="">
        <img src={slide?.url2} alt="" className={"w-[100%] lg:h-screen "} />
      </div>
      <div className="">
        <img src={slide?.url3} alt="" className={"w-[100%] lg:h-screen "} />
      </div>
      <div className="">
        <img src={slide?.url4} alt="" className={"w-[100%] lg:h-screen "} />
      </div>
      <div className="">
        <img src={slide?.url5} alt="" className={"w-[100%] lg:h-screen "} />
      </div>
    </Carousel>
  );
};

export default Banner;