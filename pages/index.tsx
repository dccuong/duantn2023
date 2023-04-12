import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../Api/productApi";
import Banner from "../component/Banner";
import Carousel from "../component/Carousel";
import HomeProducts from "../component/HomeProduct";
import { getSlider } from "../redux/sliderSlice";
import { RootState } from "../redux/store";
import Product from "./product";

type Props = {
  products: any[];
};

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://cdn.tailwindcss.com" async></script>
      </Head>
      <div>
        <div className="relative mt-0">
          <Banner />
          {/* ssssssssssss */}
        </div>

        <div className="flex justify-between xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  font-bold "></div>
        {/* sssssss */}

        <HomeProducts products={props.products} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await await getAll();
  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};

export default index;
