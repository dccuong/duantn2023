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
      </Head>
      <div>
        <div className="relative mt-0">
          <Banner />
          {/* ssssssssssss */}
        </div>

        <div className="flex justify-between xl:mx-[200px]  lg:mx-[100px] md:mx-[80px] mx-[15px]  font-bold "></div>
        {/* sssssss */}

        {/* tour */}
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
