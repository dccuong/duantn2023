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
  data:any
};

const Banner: any = (prop: Prop) => {
    const slide = useSelector((state: RootState) => state.slider.slider);
    const dispatch = useDispatch<any>();
    useEffect(() => {
      dispatch(getSlider("641a788168e7709108d74825"));
    }, [dispatch]);
    console.log(slide, "Sss");
  return (
    <Carousel autoplay>
      <div className="">
        <img src={prop.data.url1} alt="" className={"w-[100%] lg:h-screen "} />
      </div>
      <div className="">
        <img src={prop.data.url2} alt="" className={"w-[100%] lg:h-screen "} />
      </div>
      <div className="">
        <img src={prop.data.url3} alt="" className={"w-[100%] lg:h-screen "} />
      </div>
      <div className="">
        <img src={prop.data.url4} alt="" className={"w-[100%] lg:h-screen "} />
      </div>
      <div className="">
        <img src={prop.data.url5} alt="" className={"w-[100%] lg:h-screen "} />
      </div>
    </Carousel>
  );
};

export default Banner;