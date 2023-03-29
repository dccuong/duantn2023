import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Typewriter from "typewriter-effect";
import { searchProduct } from "../../../Api/productApi";
import { Tuser } from "../../../models/user";
import { selectCarts } from "../../../redux/cartSlice";
import { getprdCates } from "../../../redux/prdCateSlice";
import { RootState } from "../../../redux/store";
import { formatCurrency } from "../../../untils";

const index = (props: any) => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const curentUser = useSelector(
    (state: RootState) => state.auth.currentUser
  ) as Tuser;
  const router = useRouter();
  const cateProduct = useSelector((state: RootState) => state.prdCate.prdCates);
  console.log(cateProduct, "ssssssss");
  const dispatch = useDispatch<any>();
  const carts = useSelector(selectCarts);
  const [search, setSearch] = useState("");
  const [productsSearch, setProductsSearch] = useState<any[]>();
  const [show, setshow] = useState(false);
  const [typing, setTyping] = useState(true);
  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchStr = e.target.value;
    setSearch(searchStr);
    const products = await searchProduct(searchStr);
    setProductsSearch(products);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) {
      toast.info("Vui lòng nhập tên SP");
      return;
    }

    router.push(`/search/${search}`);
  };

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getprdCates()).unwrap();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);
  const listnav = [
    { name: "Trang Chủ", link: "/" },
    { name: "Giày", link: "/product" },
    { name: "Giỏ Hàng", link: "/cart" },
    { name: "Tin Tức", link: "/blog" },
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

          <div className="relative group flex items-center ml-3 cursor-pointer border-1px ">
            <FontAwesomeIcon icon={faSearch} className="text-base" />
            <span className="ml-1 group-hover:text-[#282828]">Tìm kiếm</span>

            <div className="hidden min-w-[280px] z-20 group-hover:block absolute top-full -right-[100px] bg-white shadow p-3 opacity-100">
              <form action="" className="flex" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  onChange={handleSearchChange}
                  className="text-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] flex-1 border px-2 h-8 text-sm outline-none"
                  placeholder="Nhập tên sản phẩm"
                />
                <button className="px-3 bg-[#FF5722] transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>

              <ul className="mt-3 grid grid-cols-1 divide-y max-h-[70vh] overflow-y-auto">
                {search && !productsSearch?.length && (
                  <p className="text-black">Không tìm thấy SP!</p>
                )}

                {productsSearch?.map((item, index) => (
                  <li key={index}>
                    <Link href={`/product/${item.slug}`}>
                      <div className="flex py-2 transition duration-200 hover:bg-gray-50 hover:text-[#D9A953] text-black items-center px-2">
                        <div className="w-10 h-10 object-cover rounded-full relative">
                          {item.image && (
                            <img
                              src={item.image}
                              className="w-10 h-10 object-cover rounded-full bg-[#f7f7f7]"
                              alt=""
                            />
                          )}
                        </div>
                        <p className="pl-1 pr-2 normal-case font-normal">
                          {item.name}
                        </p>
                        <p className="font-medium ml-auto">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ul className="hidden md:flex items-center mt-3  ">
          {isLogged ? (
            <li className="relative flex items-center ml-3 cursor-pointer before:absolute before:content-[''] before:top-full before:left-0 before:h-2 before:right-0">
              <FontAwesomeIcon icon={faUser} className="text-base" />
              <span className="ml-1 hover:text-[#282828]">
                <Link href={curentUser.role ? "/admin" : "/profile"}>
                  {curentUser.name}
                </Link>
              </span>
            </li>
          ) : (
            <>
              <li>
                <Link href={`/register`}>
                  <button>Đăng Ký</button>
                </Link>
              </li>
              <li>
                <Link href={`/login`}>
                  <span className=" bg-[#FF5722] lg:p-[14px] p-[12px] mx-2 rounded-xl font-bold text-white">
                    Đăng Nhập
                  </span>
                </Link>
              </li>{" "}
            </>
          )}
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
          <Link href={`./register`}>
            <button>Đăng Ký</button>
          </Link>
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
              <Link href={item.link}>
                <span
                  className={
                    router.asPath == item.link
                      ? "active   border-b-4 border-orange-500 py-1 text-orange-500 px-1"
                      : "px-1"
                  }
                >
                  {item.name == "Giỏ Hàng" ? (
                    <label className="absolute text-xs w-5 h-5 font-semibold flex justify-center items-center border-2 border-[#4d8a54] rounded-full left-[10px] -top-[10px] bg-white text-primary">
                      {carts.length}
                    </label>
                  ) : null}
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </span>
              </Link>
            </li>
          ))}
          <li
            className={`z-[50] group relative font-bold hover:text-[#4d8a54] cursor-pointer text-[#282828] mx-3 ${
              router.pathname === "/product" && "text-primary"
            }`}
          >
            <div className="flex">
              <Link href="/product">Danh Mục</Link>
            </div>

            <ul className="bg-white hidden group-hover:block absolute top-full left-0 shadow px-2 py-1 z-[50] divide-y min-w-[150px]">
              {cateProduct?.map((item, index) => (
                <Link href={`/cateproduct/${item._id}`}>
                  <li
                    key={index}
                    className="text-[#282828] text-sm py-1.5 font-semibold hover:text-[#4d8a54]"
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      {/* ssssssss */}
      <div className="md:block hidden w-full  border-t border-stone-300 pb-[0.5px] ">
        <ul className="flex pt-[10px] md:pt-[18px] text-[14px] md:text-[16px] xl:mx-[200px]  lg:mx-[100px] md:mx-[90px]  sm:mx-[60px] mx-[10px] font-medium">
          {listnav.map((item, index) => (
            <li className="" key={index}>
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
          <li
            className={`z-[50] group relative font-medium cursor-pointer text-[#282828] mx-3 ${
              router.pathname === "/product" && "text-primary"
            }`}
          >
            <Link href="/product">
              <div className="flex">Danh mục</div>
            </Link>
            
            <ul className="bg-white hidden group-hover:block absolute top-full left-0 shadow px-2 py-1 z-[50] divide-y min-w-[150px]">
              {cateProduct?.map((item, index) => (
                <Link href={`/prdCate/${item._id}`}>
                  <li
                    key={index}
                    className="text-[#282828] text-sm py-1.5 font-semibold"
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
