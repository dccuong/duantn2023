import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import {
  faYoutube,
  faFacebookF,
  faTwitterSquare,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
type Props = {};

const index = (props: Props) => {
  return (
    <div className="bg-[rgb(51,51,51)]">
      <div className="grid md:grid-cols-3 grid-cols-1  py-4 border-dashed border-2 border-gray-500 text-center items-center">
        <div className=" flex md:justify-start justify-center mx-9 my-3 ">
          <FontAwesomeIcon
            icon={faFacebookF}
            className={"text-gray-400 mx-4 h-8"}
          />
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className={"text-gray-400 mx-4 h-8"}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className={"text-gray-400 mx-4 h-8"}
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className={"text-gray-400 mx-4 h-8"}
          />
        </div>
        <div>
          <span className="text-gray-400 font-sans font-semibold uppercase">
            Đăng ký nhận bản tin
          </span>
          <br />
          <span className="text-gray-400 font-sans">
            Các deal giảm giá đến 60% sẽ được gửi đến bạn
          </span>
        </div>
        <div className="my-4">
          <form action="" className="flex items-center justify-center ">
            <input
              type="text"
              className="w-[60%] py-1 rounded-l-md pl-3 font-sans font-medium"
              placeholder="Địa chỉ Email"
            />
            <button className="bg-[#FF5722] px-2 py-1 font-semibold text-white rounded-r-md">
              Đăng ký
            </button>
          </form>
        </div>
      </div>
      {/* ssssssss */}
      <div className="grid lg:grid-cols-4 grid-cols-1 ">
        <div className="text-center bg-[rgb(102,102,102,0.32)]  w-[80%]  mx-auto">
          <div className="my-3  flex justify-around">
            {" "}
            <img
              src="https://sgweb.vn/wp-content/uploads/2022/12/Logo-giup-khach-hang-nho-toi-shop-giay-cua-ban-lau-hon.jpg"
              alt=""
              width={`200px`}
              className="mx"
            />
          </div>
          <div className=" text-left lg:mx- mx-[10%]">
            <div className=" text-[#FFFFFF] leading-6  my-3">
              Address : 195 Le Duc Tho, My Dinh, Ha Noi
            </div>
            <div className=" text-[#FFFFFF] leading-6  my-3">
              Phone: 0983456789
            </div>
          </div>
          <div className=" flex justify-around items-center  mb-3">
            <div>
              <img
                src="https://servicesdown.com/img/visa-logo.png"
                alt=""
                width={`50px`}
              />
            </div>
            <div>
              <img
                src="https://webtindung.com/wp-content/uploads/2016/04/the-mastercard-la-gi-33-4005.png"
                alt=""
                width={`50px`}
              />
            </div>
            <div>
              <img
                src="https://static.thenounproject.com/png/3683651-200.png"
                alt=""
                width={`50px`}
              />
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png"
                alt=""
                width={`50px`}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3  lg:mx-0 mx-[10%] md:mr-4">
          <div
            className="grid lg:grid-cols-4 grid-cols-2  border-b-2 border-gray-500 mt-3 pb-6 mr-5
          "
          >
            <div>
              <Link href={`ss`}>
                <span className={`text-[#FFFFFF] leading-6  my-3 text-xl`}>
                  {" "}
                  Sneaker Pop
                </span>
              </Link>
            </div>
            <div>
              <Link href={`product`}>
                <span className={`text-[#FFFFFF] leading-6  my-3`}>
                  {" "}
                  Sản Phẩm
                </span>
              </Link>
            </div>
            <div>
              <Link href={`cart`}>
                <span className={`text-[#FFFFFF] leading-6  my-3`}>
                  {" "}
                  Giỏ hàng
                </span>
              </Link>
            </div>
            <div>
              <Link href={`payment`}>
                <span className={`text-[#FFFFFF] leading-6  my-3`}>
                  {" "}
                  Thanh toán
                </span>
              </Link>
            </div>
          </div>
          <div className=" text-gray-400 font-sans hover:text-[#FFFFFF]  text-[12px]  mx-[10%] text-center items-center pt-5">
            © Bản quyền thuộc về SneakerPOP | Top 10 đơn vị Uy tín hàng đầu Việt
            Nam
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
