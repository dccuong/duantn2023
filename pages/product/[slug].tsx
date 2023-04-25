import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";

import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { get } from "../../Api/prdCateApi";
import { getAll, getS } from "../../Api/productApi";

import { TPrdCate } from "../../models/prdCates";
import { Product } from "../../models/product";
import { addCart } from "../../redux/cartSlice";
import { formatCurrency } from "../../untils";
import Item from "antd/lib/list/Item";
import { useRouter } from "next/router";

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [orderSize, setSize] = useState<any>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const size = [44, 43, 42, 41, 40, 39, 38, 37, 36];
  const handleChangeQnt = (e: ChangeEvent<HTMLInputElement>) => {
    const qnt = +e.target.value;

    if (isNaN(qnt)) {
      toast.info("Vui lòng nhập số");
      return;
    }
    setQuantity(qnt);
  };

  const increaseQnt = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQnt = () => {
    if (quantity <= 1) {
      setQuantity(1);
      return;
    }

    setQuantity((prev) => prev - 1);
  };

  const handleAddCart = () => {
    if (quantity < 1) {
      toast.info("Vui lòng chọn ít nhất 1 sản phẩm");
      return;
    }
    if (orderSize == null) {
      toast.info("Vui lòng chọn size");
      return;
    }

    dispatch(
      addCart({
        quantity,
        productId: product._id,
        productPrice: product.price,
        image: product.image,
        slug: product.slug,
        name: product.name,
        size: String(orderSize),
      })
    );
    toast.success("Thêm thành công");
    setQuantity(1);
  };
  const handleBuyNow = () => {
    if (quantity < 1) {
      toast.info("Vui lòng chọn ít nhất 1 sản phẩm");
      return;
    }
    if (orderSize == null) {
      toast.info("Vui lòng chọn size");
      return;
    }

    dispatch(
      addCart({
        quantity,
        productId: product._id,
        productPrice: product.price,
        image: product.image,
        slug: product.slug,
        name: product.name,
        size: String(orderSize),
      })
    );
    setTimeout(() => {
      router.push("/cart");
    }, 500);
    setQuantity(1);
  };

  return (
    <div className="mx-auto ">
      <Head>
        <title>{product.name}</title>
      </Head>
      <div>
        <ul className="flex pt-5">
          <li>
            <Link href="/">Trang chủ</Link>
          </li>{" "}
          <span className="px-3 ">/</span>
          <li>
            <Link href="/">Sản phẩm</Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10 lg:gap-8 gap-0 place-items-center">
        <div className=" text-center md:max-w-[450px] max-w-[250px]">
          {product.image && (
            <img
              src={product.image}
              className=""
              alt=""
              width={450}
              height={450}
            />
          )}
        </div>
        <div className="w-[100%] md:col-span-2">
          <div>
            <h2 className="lg:text-[20px] md:text-[16px] text-[14px] font-semibold pt-50">
              {product.name}
            </h2>
            <p className="italic pt-3 lg:text-[18px] md:text-[16px] text-[10px]">
              {product.desc}
            </p>
            <p className="text-lg">
              Giá:{" "}
              <span className="text-primary lg:text-[20px] md:text-[16px] text-[14px] font-bold">
                {formatCurrency(product.price)}
              </span>{" "}
            </p>
            <p>Size</p>
            <div className=" flex ">
              {size.map((Item, index) => (
                <div
                  className={
                    `md:p-2 p-1 border-solid font-bold  lg:text-[18px] md:text-[14px] text-[10px] border-2 mx-1 rounded-md ` +
                    `${
                      orderSize == Item ? "border-[#ff5722]" : "border-gray-500"
                    }`
                  }
                  key={index}
                  onClick={() => {
                    setSize(Item);
                  }}
                >
                  {Item}
                </div>
              ))}{" "}
            </div>
            <span>Số lượng:</span>
            <button className="border px-2 ml-5 my-5" onClick={decreaseQnt}>
              -
            </button>
            <input
              className="outline-none border text-center w-10"
              type=""
              value={quantity}
              onChange={handleChangeQnt}
            />
            <button className="border px-2" onClick={increaseQnt}>
              +
            </button>
          </div>

          <div className=" ">
            <button
              type="button"
              onClick={handleAddCart}
              className="lg:text-[18px] md:text-[14px] text-[10px] border border-orange-300 rounded-full bg-green-50 p-2.5 w-56  font-bold text-primary"
            >
              <FontAwesomeIcon className="px-2" icon={faCartPlus} />
              Thêm vào giỏ hàng
            </button>
            <button
              onClick={handleBuyNow}
              type="submit"
              className="lg:text-[18px] md:text-[14px] text-[10px] border border-orange-300 ml-4 mb-7 rounded-full bg-primary p-2 w-52 text-lg font-bold text-black"
            >
              Mua ngay
            </button>
          </div>
          <hr />
          <div className="py-3">
            <p>
              <span className="font-semibold pb-3 lg:text-[18px] md:text-[14px] text-[10px]">Giao hàng miễn phí:</span> Áp
              dụng đơn hàng {">"} 200.000đ
            </p>
            <p>
              <span className="font-semibold lg:text-[18px] md:text-[14px] text-[10px]">Thanh toán tại nhà:</span> Nhanh
              chóng và an toàn
            </p>
          </div>
        </div>
      </div>

      <section>
        <h1 className="lg:text-[18px] md:text-[14px] text-[12px] font-semibold pt-50 text-center">
          CÓ THỂ BẠN THÍCH
        </h1>
      </section>
      <section className="col-span-12 lg:col-span-9 pb-10">
        <div className="grid grid-cols-2 md:grid-clos-3 lg:grid-cols-4 gap-4">
          {/* {catePrd.cateproduct.products?.slice(0, 4).map((item, index) => (
            <div className="group" key={index}>
              <div className="relative bg-[#f7f7f7] overflow-hidden border mt-10 pt-[100%]">
                {item.image && <Image src={item.image} alt="" layout="fill" />}
                <button className="absolute w-full bottom-0 h-9 bg-primary text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                  Xem nhanh
                </button>
              </div>
              <div className="text-center py-3">
                <Link href={`/product/${item.slug}`}>
                  <span className=" cursor-pointer block font-semibold text-xl">{item.name}</span>
                </Link>
                <span className="font-semibold text-xl">
                  <span className="font-semibold text-lg">Giá</span>: {formatCurrency(product.price)}
                </span>
              </div>
            </div>
          ))} */}
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAll();
  const paths = res.map((product: any) => ({ params: { slug: product.slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const slug = context.params?.slug as string;
  const product = await getS(slug);
  return {
    props: { product },
    revalidate: 6,
  };
};
export default ProductDetail;
