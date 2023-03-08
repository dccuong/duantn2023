import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const index = (props: any) => {
  const [show, setshow] = useState(false);
  const [typing, setTyping] = useState(true);
  const router = useRouter();
  const listnav = [
    { name: "tất cả", link: "/all" },
    { name: "khách sạn", link: "/hotels" },
    { name: "máy bay", link: "/hotles" },
    { name: "tour", link: "/tours" },
    { name: "tin tức", link: "/news" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px] mb-3 ">
        <div className=" flex  items-center mb-3">
          <div className="bg-white md:w-[110px]  lg:w-[135px]  w-[70px]  ">
            <img
              src="https://bizweb.dktcdn.net/100/374/261/themes/747465/assets/logo.png?1661325852781"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div
                className={typing ? `absolute top-1 md:top-2 left-5` : "hidden"}
              >
                {
                  <Typewriter
                    options={{
                      strings: ["Search nowww!"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                }
                <button
                  className={
                    typing ? "hidden" : ` absolute top-1 md:top-2 right-0`
                  }
                ></button>
              </div>
              <input
                type="search"
                className="mx-3 form-control block 2xl:w-[110%] w-[80%] px-3 h-[30px]  md:h-[35px] text-base font-normal
        text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-2xl transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                onClick={() => {
                  setTyping(false);
                }}
              />
            </div>
          </div>
        </div>

        <ul className="hidden md:flex items-center mt-3  ">
          {/* <div>
            {locales?.map((l, i) => {
              return (
                <span key={i}>
                  <li className=" w-[40px] h-[18px] flex">
                    <Link href={asPath} locale={l}>
                      {l}
                    </Link>
                  </li>
                </span>
              );
            })}
          </div> */}

          <li className=" w-[40px] h-[18px] flex mx-2">VND</li>
          <li> Đăng Ký</li>
          <li>
            {" "}
            <Link href={`./login`}>
              <span className=" bg-[#FF5722] lg:p-[14px] p-[12px] mx-2 rounded-xl font-bold text-white">
                Đăng Nhập
              </span>
            </Link>
          </li>
        </ul>

        <div
          id="bgIcon"
          onClick={() => setshow(!show)}
          className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center md:hidden cursor-pointer`}
        >
          <svg
            className={`${show ? "hidden" : ""}`}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" transform duration-150"
              d="M4 6H20"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className=" transform duration-150"
              d="M4 18H20"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className={`${show ? "block" : "hidden"}`}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* <div
          id="MobileNavigation"
          className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
        >
          <ul className="flex items-center mt-3">
            <li className=" w-[40px] h-[18px] flex">
              <img src="/image 11.png" alt="" />
            </li>
            <li className=" w-[40px] h-[18px] flex mx-2">VND</li>
            <li> Đăng Ký</li>
            <li>
              {" "}
              <span className=" bg-[#FF5722] p-[14px] mx-3 rounded-xl font-bold text-white">
                Đăng Nhập
              </span>
            </li>
          </ul>
        </div> */}
      </div>
      {/* ssssssssssss */}
      <div
        id="MobileNavigation"
        className={`${
          show ? "block" : "hidden"
        } md:hidden w-[100%]    grid grid-cols-1`}
      >
        <div className="flex  py-5 mx-auto border-t border-stone-300 w-full px-3">
          <div className=" w-[40px] h-[18px] ">
            <img src="/image 11.png" alt="" />
          </div>
          <div className=" w-[40px] h-[18px]  mx-2 ">VND</div>
        </div>
        <div className="  flex  py-5 mx-auto border-t border-stone-300  w-full px-3">
          <div> Đăng Ký</div>
          <div>
            <Link href={`./login`}>
              <span className=" bg-[#FF5722] p-[10px] mx-3 rounded-xl font-bold text-white">
                Đăng Nhập
              </span>
            </Link>
          </div>
        </div>
        <ul className="py-5 mx-auto border-t border-stone-300 w-full px-3 font-normal">
          {listnav.map((item, index) => (
            <li
              className="mr-[15px] md:mr-[25px] lg:mr-[70px] mt-2"
              key={index}
            >
              {" "}
              <Link href={item.link}>
                <span
                  className={
                    router.asPath == item.link
                      ? "active   border-b-4 border-orange-500 py-1 text-orange-500 px-1"
                      : "px-1"
                  }
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* ssssssss */}
      <div className="md:block hidden w-full  border-t border-stone-300 pb-[0.5px] ">
        <ul className="flex pt-[10px] md:pt-[18px] text-[14px] md:text-[16px] xl:mx-[200px]  lg:mx-[100px] md:mx-[90px]  sm:mx-[60px] mx-[10px] font-medium">
          <li className="">
            {" "}
            <Link href={"/"}>
              <span
                className={
                  router.asPath == "/"
                    ? "active   border-b-4 border-orange-500 py-4 text-orange-500 pr-5"
                    : "pr-5"
                }
              >
                Nơi bạn muốn đến
              </span>
            </Link>
          </li>
          {listnav.map((item, index) => (
            <li className="" key={index}>
              {" "}
              <Link href={item.link}>
                <span
                  className={
                    router.asPath == item.link
                      ? "active   border-b-4 border-orange-500 py-4 text-orange-500 px-5"
                      : "px-5"
                  }
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default index;
