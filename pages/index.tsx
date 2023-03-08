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
          <span>Địa điểm gần đây</span>
          <span>Tất cả</span>
        </div>

        {/* sssssss */}

        {/* tour */}
        <div className="mt-[30px]">
          <div className="flex justify-between xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  font-bold ">
            <span>Địa điểm gần đây</span>
            <span>Tất cả</span>
          </div>
        </div>

        <div className="mt-[30px]">
          <div className="flex justify-between xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px] ] font-bold ">
            <span>Địa điểm gần đây</span>
            <span>Tất cả</span>
          </div>
          <div className="xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  "></div>
        </div>
        <div className="mt-[30px]">
          <div className="flex justify-between xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px] ] font-bold ">
            <span>Địa điểm gần đây</span>
            <span>Tất cả</span>
          </div>
          <div className="xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  "></div>
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
                        Tour du lịch
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
                          className=" lg:py-3 py-2  w-[100%]   lg:w-[45%] md:rounded-bl-lg  rounded-md mr-2 mb-2 block"
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
                          Tìm kiếm
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
                        Khách sạn
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
                          Tìm kiếm
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
                        Vé máy bay
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
                          Tìm kiếm
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
