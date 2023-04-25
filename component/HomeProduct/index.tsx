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
  const handleAddCart = (key: any) => {
    dispatch(
      addCart({
        quantity: 1,
        productId: products[key]._id,
        productPrice: products[key].price,
        image: products[key].image,
        slug: products[key].slug,
        name: products[key].name,
      })
    );
    toast.success(`Đã thêm ${products[key].name} vào giỏ hàng`);
    setQuantity(1);
  };

  return (
    <section className="container-base">
      <div className="py-16">
        <h2 className="uppercase font-bebas text-4xl text-normal text-center">
          Sản phẩm mới
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-5">
          {products.slice(0, 8).map((item, index) => (
            <div key={index}>
              <div className="border border-[#ebebeb] relative cursor-pointer group overflow-hidden">
                <Link href={`/product/${item.slug}`}>
                  {item.image && (
                    <img src={item.image} alt="" width={"470px"} />
                  )}
                </Link>

             
              </div>

              <div className="text-center text-lg font-bold py-3">
                <div className="mx-3 mt-2">
                  <div className="  lg:text-[17px] text-[12px]   text-black font-medium ">
                    {item.name}
                  </div>
                </div>
                <div className="lg:flex lg:justify-between items-center mt-2 pb-3  mx-3">
                  <div className=" lg:text-[16px] text-[12px] leading-[21px]  font-normal text-[#FF5722] p-2">
                    {formatCurrency(item.price  )}
                  </div>
                  <div>
                    <button className="bg-[#FF5722]  leading-[21px] lg:text-[16px] text-[12px] font-semibold text-white px-2 py-1 rounded-md">
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
