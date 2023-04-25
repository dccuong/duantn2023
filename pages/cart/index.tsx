import {
  faLeftLong,
  faLongArrowAltLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import CartNav from "../../component/CartNav";
import {
  decreaseQnt,
  increaseQnt,
  removeCart,
  selectCarts,
  selectTotalPrice,
} from "../../redux/cartSlice";
import { formatCurrency } from "../../untils";

type Props = {};

const CartList = (props: Props) => {
  const carts = useSelector(selectCarts);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  console.log(carts, "carts");
  const handleIncreaseQnt = (productId: string) => {
    dispatch(increaseQnt(productId));
  };

  const handleDecreaseQnt = (productId: string) => {
    dispatch(decreaseQnt(productId));
  };

  const handleRemoveCart = (productId: string, prdSize: any) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa SP",
      text: "Không thể hoàn tác sau khi xóa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeCart({ productId, prdSize }));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <main>
      <Head>
        <title>Cart</title>
      </Head>
      <p  className="mt-3 text-center uppercase lg:text-sm text-[10px] text-gray-500">Giỏ hàng</p>
      <section className=" w-[100%] mx-auto px-1 mt-3 grid grid-cols-12 mb-9">
        {carts.length >= 1 && (
          <>
            <form
              action=""
              method="POST"
              id="cart__detail-form"
              className="col-span-12 lg:col-span-8 lg:pr-6"
            >
              <table
                className="table-auto w-full  border-collapse"
                id="cart__detail"
              >
                <thead>
                  <tr className="uppercase border-b-2">
                    <th
                      className="pb-1 uppercase lg:text-sm text-[10px] text-gray-500"
                      colSpan={2}
                    >
                      Sản phẩm
                    </th>
                    <th className="p-1 uppercase lg:text-sm text-[10px]  text-gray-500">
                      Giá
                    </th>
                    <th className="p-1 uppercase lg:text-sm text-[10px]  text-gray-500">
                      Số lượng
                    </th>
                    <th className="p-1 uppercase lg:text-sm text-[10px]  text-gray-500">
                      Size
                    </th>
                    <th className="pb-1 uppercase lg:text-sm text-[10px]  text-gray-500 text-right md:visible invisible">
                      Tạm tính
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {carts?.map((item, index) => (
                    <tr className="border-b" key={index}>
                      <td>
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveCart(item.productId, item.size)
                          }
                          className=" text-gray-400 lg:text-[16px] text-[10px] transition ease-linear duration-200 hover:text-black"
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </td>
                      <td className="lg:flex items-center">
                        <div className="p-2">
                          <Link href={`/product/${item.slug}`}>
                            <div className="w-16 h-16 relative">
                              <img
                                className="block w-16 object-cover absolute"
                                src={item.image}
                                alt=""
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="">
                          <a
                            className="font-semibold lg:text-[14px] text-[9px] text-center"
                            href={`/product/${item.slug}`}
                          >
                            {item.name}
                          </a>
                        </div>
                      </td>
                      <td className="font-bold lg:text-[14px] text-[8px]">
                        {formatCurrency(item.productPrice)}
                      </td>
                      <td className="p-1">
                        <div className="flex items-center h-9">
                          <button
                            type="button"
                            onClick={() => handleDecreaseQnt(item.productId)}
                            className="px-1 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            readOnly
                            onChange={() => {}}
                            className="border border-gray-200 h-full md:w-10 w-5 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]"
                            value={item.quantity}
                          />
                          <button
                            type="button"
                            onClick={() => handleIncreaseQnt(item.productId)}
                            className="px-1 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="font-bold lg:text-[14px] text-[10px]">{item.size}</td>
                      <td className="font-bold text-right md:block hidden">
                        {formatCurrency(item.productPrice * item.quantity)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="flex mt-6 items-center">
                <li>
                  <Link href="/product">
                    <button
                      type="button"
                      className="select-none uppercase h-8 text-primary font-semibold lg:text-[16px] text-[10px] border-[#ff5722] border-2 px-3 transition ease-linear duration-300 hover:bg-[#ff5722] hover:text-white"
                    >
                      <FontAwesomeIcon icon={faLeftLong} />
                      <span> Tiếp tục xem sản phẩm</span>
                    </button>
                  </Link>
                </li>
              </ul>
            </form>
            <div className="mt-8 lg:mt-0 col-span-12 lg:col-span-4 lg:border-l lg:pl-6">
              <table className="table-fixed w-full text-left">
                <thead>
                  <tr className="uppercase border-b-2">
                    <th className="pb-1 lg:text-[16px] text-[10px] text-gray-500" colSpan={2}>
                      Cộng giỏ hàng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="lg:text-[16px] text-[10px]">Tạm tính</td>
                    <td className="py-2 text-right font-semibold lg:text-[16px] text-[10px]">
                      {formatCurrency(totalPrice)}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="lg:text-[16px] text-[10px]">Tổng</td>
                    <td className="py-2 text-right font-semibold lg:text-[16px] text-[10px]">
                      {formatCurrency(totalPrice)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link href="/checkout">
              <button
                      type="button"
                      className=" w-[100%] uppercase h-8 text-primary font-semibold text-sm border-[#ff5722] border-2 px-3 transition ease-linear duration-300 hover:bg-[#ff5722] hover:text-white"
                    >
                  Tiến hành thanh toán
                </button>
              </Link>
              {/* <form action="" className="mt-7">
            <div className="flex items-center pb-2 font-semibold border-b-2 text-gray-500">
              <div className="mr-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="tag"
                  className="svg-inline--fa fa-tag "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z"
                  ></path>
                </svg>
              </div>{" "}
              Mã giảm giá
            </div>
            <input
              type="text"
              placeholder="Mã giảm giá"
              className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] my-4 w-full border px-2 h-10 text-sm outline-none"
              value=""
            />
            <button className="w-full px-3 py-2 bg-gray-100 border border-gray-300 text-black text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
              Áp dụng
            </button>
          </form> */}
            </div>
          </>
        )}

        {!carts.length && (
          <section className="text-center col-span-12 py-12">
            <p>Chưa có sản phẩm nào trong giỏ hàng</p>
            <Link href="/product">
              <div className="block mt-4">
                <button className="uppercase h-8 text-[#ff5722] font-semibold text-sm border-[#ff5722] border-2 px-3 transition ease-linear duration-300 hover:bg-[#ff5722] hover:text-white">
                  <FontAwesomeIcon icon={faLongArrowAltLeft} />
                  <span> Tiếp tục mua hàng</span>
                </button>
              </div>
            </Link>
          </section>
        )}
      </section>
    </main>
  );
};

export default CartList;
