import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Product } from "../../models/product";
import { addCart } from "../../redux/cartSlice";
import { formatCurrency } from "../../untils";

import styles from "./HomeProduct.module.scss";

const cx = classNames.bind(styles);

type HomeProductsProps = {
  products: Product[];
};

const HomeProducts = ({ products }: HomeProductsProps) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddCart = (key:any) => {

    dispatch(
      addCart({
        quantity:1,
        productId: products[key]._id,
        productPrice: products[key].price,
        image: products[key].image,
        slug:products[key].slug,
        name: products[key].name,
      }),
    );
    toast.success(`Đã thêm ${products[key].name} vào giỏ hàng`);
    setQuantity(1);
  };
  return (
    <section className="container-base">
      <div className="py-16">
        <h2 className="uppercase font-bebas text-4xl text-normal text-center">
          Sản phầm mới
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-5">
          {products.slice(0, 8).map((item, index) => (
            <div key={index}>
              <div className="border border-[#ebebeb] relative cursor-pointer group overflow-hidden">
                <Link href={`/product/${item.slug}`}>
                  {item.image && <img src={item.image} alt="" width={"fill"} />}
                </Link>

                <button  onClick={()=>{handleAddCart(index)}} className="absolute bg-[#ff5722] bottom-0 w-full h-10 bg-primary text-white font-bold translate-y-full group-hover:translate-y-0 transition-all duration-300 opacity-90 hover:opacity-100">
                  Thêm vào giỏ hàng
                </button>
              </div>

              <div className="text-center text-lg font-bold py-3">
                <div className="mx-3 mt-2">
                  <div className=" md:text-[21px] text-[18px]   text-black font-medium ">
                    {item.name}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 pb-3  mx-3">
                  <div className="text-[16px] leading-[21px]  font-normal text-[#FF5722] p-2">
                    {item.price}
                  </div>
                  <div>
                    <button className="bg-[#FF5722]  leading-[21px]  font-semibold text-white px-2 py-1 rounded-md">
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
