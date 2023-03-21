import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
type Props = {
  data:any
};

const carousel = (props: Props) => {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  //   const {
  //     carouselState: { currentSlide },
  //   } = rest;
  //   return (
  //     <div
  //       className="carousel-button-group mb-4  absolute bottom-[40%]   gap-4 flex justify-between
  //       items-center w-full"
  //     >
  //       <button
  //         className="block p-3 bg-slate-50 rounded-md bg-opacity-25 hover:bg-opacity-50"
  //         onClick={() => previous()}
  //       >{`<`}</button>
  //       <button onClick={() => next()}>
  //         <span className="block p-3 bg-slate-50 rounded-md bg-opacity-25 hover:bg-opacity-50">{`>`}</span>
  //       </button>
  //     </div>
  //   );
  // };
  return (
    <div className="xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  ">
      {" "}
      <div className="slide2 relative mx-2">
        <Carousel
          responsive={responsive2}
          autoPlay={true}
          // renderButtonGroupOutside={true}
          // customButtonGroup={<ButtonGroup />}
          arrows={false}
        >
          <div className=" bg-slate-500 relative rounded-md mr-3">
            <img src={props.data.url1} alt="" className="h-[100%] w-[100%]" />
            <div className="absolute top-[45%] left-[40%]  text-[21px] text-black font-medium ">
              {/* Hà Nội */}
            </div>
          </div>
          <div className=" bg-slate-500 relative rounded-md mr-3">
          <img src={props.data.url2} alt="" className="h-[100%] w-[100%]" />
            <div className="absolute top-[45%] left-[40%]  text-[21px] text-black font-medium ">
              {/* Hà Nội */}
            </div>
          </div>
          <div className=" bg-slate-500 relative rounded-md mr-3">
          <img src={props.data.url3} alt="" className="h-[100%] w-[100%]" />
            <div className="absolute top-[45%] left-[40%]  text-[21px] text-black font-medium ">
              {/* Hà Nội */}
            </div>
          </div>
          <div className=" bg-slate-500 relative rounded-md mr-3">
          <img src={props.data.url4} alt="" className="h-[100%] w-[100%]" />
            <div className="absolute top-[45%] left-[40%]  text-[21px] text-black font-medium ">
              {/* Hà Nội */}
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default carousel;