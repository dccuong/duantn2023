import React, { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Tabs } from "antd";

type Props = {
  hotels: any[];
  blogs: any[];
  tour: any[];
};

const index = (props: Props) => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="">
        <div>
          <div className="relative mt-0">
        
            <div className="md:absolute sm:top-[8%] lg:top-[30%]  top-[20px] bottom-0 xl:left-[259px] lg:left-[150px]   sm:left-[65px] left-[10px] md:mx-0 mx-3">
              <div className="w-100%">
                <span className="lg:text-[44px] 2xl:text-[64px] md:text-[34px] text-[24px] md:text-white text-black font-bold font-mono">
                  Lorem ipsum dolor sit amet
                </span>
                <br />
                <span className=" text-[14px] md:text-[18px]  lg:text-[24px]  md:text-white text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </span>
                <div className="relative w-full">
                  <div className="w-[100%] rounded-md px-6 bg-black lg:h-[190px] h-[240px]  opacity-[0.5]"></div>
                  <div className=" absolute top-2 w-full md:px-3 px-1">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ssssssssssss */}
        <div className=" mb-6 grid lg:grid-cols-2 grid-cols-1 gap-2 xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  mt-[40px]">
          <div className="h-[] bg-slate-500 ">
            {" "}
            <img src="/ban1.png" alt="" className="h-full w-[100%]" />
          </div>
          <div className="h-[] bg-slate-500 ">
            {" "}
            <img src="/ban2.png" alt="" className="h-full w-[100%]" />
          </div>
        </div>
        {/* ssssssssssssssss */}
        <div className="flex justify-between xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  font-bold ">
          <span>?????a ??i???m g???n ????y</span>
          <span>T???t c???</span>
        </div>

        {/* sssssss */}

 
        {/* tour */}
        <div className="mt-[30px]">
          <div className="flex justify-between xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  font-bold ">
            <span>?????a ??i???m g???n ????y</span>
            <span>T???t c???</span>
          </div>
   
        </div>

        <div className="mt-[30px]">
          <div className="flex justify-between xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px] ] font-bold ">
            <span>?????a ??i???m g???n ????y</span>
            <span>T???t c???</span>
          </div>
          <div className="xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  ">
          
          </div>
        </div>
        <div className="mt-[30px]">
          <div className="flex justify-between xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px] ] font-bold ">
            <span>?????a ??i???m g???n ????y</span>
            <span>T???t c???</span>
          </div>
          <div className="xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  ">

          </div>
        </div>

        <div className=" hidden  ">
          <div className=" text-[#FF5722] shadow-2xl hover:shadow-2xl">
            1231
          </div>
          <div className=" text-[#6de360]  hover:mb-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            1232
          </div>
          <div className=" text-yellow-400 text-[16px]">1233</div>
          <div className=" text-red-400">1233</div>
          <div className=" text-red-400 text-[18px]">1233</div>
          <>
            <Tabs
              defaultActiveKey="1"
              tabBarGutter={1}
              onChange={onChange}
              items={[
                {
                  label: (
                    <>
                      <div
                        className={
                          "s"
                            ? "first:font-semibold leading-6 bg-white  lg:p-3 p-2  lg:text-[19px] text-[16px] text-black rounded-tl-lg"
                            : "first:font-semibold leading-6 bg-[#ADADAD]  lg:p-3 p-2  lg:text-[19px] text-[16px] text-black rounded-tl-lg"
                        }
                      >
                        Tour du l???ch
                      </div>
                    </>
                  ),
                  key: "1",
                  children: (
                    <>
                      <form
                        action=""
                        className="lg:flex lg:justify-between my-2"
                      >
                        <input
                          type="text"
                          className=" lg:py-3  py-2  w-[100%]   lg:w-[45%] md:rounded-bl-lg  rounded-md mr-2 mb-2 block"
                        />
                        <div>
                          <div className="flex justify-between items-center">
                            <select className=" lg:py-3   py-2 rounded-md  lg:w-[45%] lg w-full block">
                              <option value="A">Apple</option>
                              <option value="B">Banana</option>
                              <option value="C">Cranberry</option>
                            </select>
                            <input
                              type="date"
                              className=" lg:py-3 py-2 ml-2   rounded-md lg:w-[45%] w-full block lg:mr-2 text-[12px]"
                            />
                          </div>
                        </div>
                        <button className="  lg:p-3 p-2 bg-[#FF5722] lg:w-[18%] w-full   rounded-md mt-2 lg:mt-0  font-normal text-white  mb-2">
                          T??m ki???m
                        </button>
                      </form>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <div
                        onClick={() => {}}
                        className={
                          "s"
                            ? "first:font-semibold leading-6 bg-white  lg:p-3 p-2  lg:text-[19px] text-[16px] text-black "
                            : "first:font-semibold leading-6 bg-[#ADADAD] lg:p-3 p-2  lg:text-[19px] text-[16px] text-black "
                        }
                      >
                        Kh??ch s???n
                      </div>
                    </>
                  ),
                  key: "2",
                  children: (
                    <>
                      <form action="" className="md:flex md:justify-between ">
                        <input
                          type="text"
                          className=" lg:p-3 p-2 md:w-[50%]  w-full md:rounded-bl-lg  rounded-md my-2 block"
                        />

                        <select className=" xl:p-3 p-2    rounded-md my-2 md:w-[25%] w-full block">
                          <option value="A">Apple</option>
                          <option value="B">Banana</option>
                          <option value="C">Cranberry</option>
                        </select>
                        <button className=" xl:py-3 py-2  bg-[#FF5722] md:w-[15%] w-full  md:rounded-br-lg  rounded-md my-2 block font-normal text-white ">
                          T??m ki???m
                        </button>
                      </form>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <div
                        onClick={() => {}}
                        className={
                          "s"
                            ? "first:font-semibold leading-6 bg-white  lg:p-3 p-2  lg:text-[19px] text-[16px] text-black rounded-tr-lg"
                            : "first:font-semibold leading-6 bg-[#ADADAD]  lg:p-3 p-2  lg:text-[19px] text-[16px] text-black rounded-tr-lg"
                        }
                      >
                        V?? m??y bay
                      </div>
                    </>
                  ),
                  key: "3",
                  children: (
                    <>
                      <form action="" className="md:flex md:justify-between ">
                        <input
                          type="text"
                          className=" lg:p-3 p-2 md:w-[50%]  w-full md:rounded-bl-lg  rounded-md my-2 block"
                        />

                        <select className=" xl:p-3 p-2    rounded-md my-2 md:w-[25%] w-full block">
                          <option value="A">Apple</option>
                          <option value="B">Banana</option>
                          <option value="C">Cranberry</option>
                        </select>
                        <button className=" xl:py-3 py-2  bg-[#FF5722] md:w-[15%] w-full  md:rounded-br-lg  rounded-md my-2 block font-normal text-white ">
                          T??m ki???m
                        </button>
                      </form>
                    </>
                  ),
                },
              ]}
            />
          </>
        </div>
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   let responseHotel = await fetch(
//     "http://178.128.84.143:8080/api/v1/hotel?page=1&pageSize=8",
//     {
//       method: "GET",
//       headers: {
//         Authorization:
//           "Basic " + btoa("tripfinder:438d25c3665d6c9d5535f1cbc41c3710"),
//       },
//     }
//   );
//   let responseTour = await fetch(
//     "http://178.128.84.143:8080/api/v1/tour?page=1&pageSize=8",
//     {
//       method: "GET",
//       headers: {
//         Authorization:
//           "Basic " + btoa("tripfinder:438d25c3665d6c9d5535f1cbc41c3710"),
//       },
//     }
//   );
//   let responseBlog = await fetch(
//     "http://178.128.84.143:8080/api/v1/blog?page=1&pageSize=8",
//     {
//       method: "GET",
//       headers: {
//         Authorization:
//           "Basic " + btoa("tripfinder:438d25c3665d6c9d5535f1cbc41c3710"),
//       },
//     }
//   );
//   let datah = await responseHotel.json();
//   const hotels = await datah.data.list;
//   console.log(datah, "dataaa");
//   let datab = await responseBlog.json();
//   const blogs = await datab.data.list;
//   let datat = await responseTour.json();
//   const tour = await datat.data.list;

//   return {
//     props: {
//       hotels,
//       blogs,
//       tour,
//     },
//     revalidate: 6,
//   };
// };
export default index;
