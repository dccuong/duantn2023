import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { get, getAll } from "../../Api/prdCateApi";
import { PrdCate } from "../../models/prdCates";
import { formatCurrency } from "../../untils";

type Props = {
  cateproduct: PrdCate;
};

const Cateproduct = ({ cateproduct }: Props) => {
  const { products } = cateproduct;

  return (
    <div className="container-base">
      <Head>
        <title>{cateproduct?.cateproduct.name}</title>
      </Head>
      <main>
        <section>
          <div>
            <ul className="flex py-5">
              <li>
                <Link href="/">Trang chủ</Link>
              </li>{" "}
              <span className="px-3 ">/</span>
              <li>
                <Link href="/">Danh mục</Link>
              </li>
            </ul>
          </div>
          <h1 className="text-3xl font-sans font-semibold pt-50">
            {cateproduct?.cateproduct.name}
          </h1>
        </section>
        <section className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-2 md:grid-clos-3 lg:grid-cols-4 gap-4">
            {!products.length && (
              <p className="py-10">Không tồn tại sản phẩm</p>
            )}
            {products?.map((item, index) => {
              return (
                <div key={index} className="mt-3">
                  <Link href={`/product/${item.slug}`}>
                    <div className="rounded-md  bg-slate-100 shadow-lg hover:shadow-2xl">
                      <div className="rounded-t-lg h-[45%] ">
                        <img
                          src={item.image}
                          alt=""
                          className={"rounded-t-lg h-[100%] w-[100%]"}
                          height={`full`}
                        />
                      </div>
                      <div className="mx-3 mt-2">
                        <span className="  text-[12px]">Sản Phẩm Mới</span>
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
                  </Link>
                </div>
              );
            })}
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div></div>
            <ul className="flex px-20 py-10">
              <li className="border-2 flex items-center justify-center p-2 m-4  w-9 h-8 text-center hover:bg-[#4d8a54]  hover:text-white">
                <Link href="/">1</Link>
              </li>
              <li className="border-2 flex items-center justify-center p-2 m-4 w-9 h-8 text-center hover:bg-[#4d8a54]  hover:text-white ">
                <Link href="/">2</Link>
              </li>
              <li className="border-2 flex items-center justify-center p-2 m-4 w-9 h-8 text-center hover:bg-[#4d8a54]  hover:text-white">
                <Link href="/">3</Link>
              </li>
              <li className="border-2 flex items-center justify-center p-2 m-4 w-9 h-8 text-center hover:bg-[#4d8a54]  hover:text-white">
                <Link href="/">4</Link>
              </li>
              <li className="border-2 flex items-center justify-center p-2 m-4 w-9 h-8 text-center hover:bg-[#4d8a54]  hover:text-white">
                <Link href="/">5</Link>
              </li>
            </ul>
          </div> */}
        </section>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAll();
  const paths = data.map((cateproduct) => ({
    params: { id: cateproduct._id },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.id as string;
  const cateproduct = await get(id);
  return {
    props: {
      cateproduct,
    },
    revalidate: 60,
  };
};

export default Cateproduct;
