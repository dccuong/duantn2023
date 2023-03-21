import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAll } from "../../Api/productApi";
import { Product } from "../../models/product";
type Props = {
  products: Product[];
};

const Product = ({ products }: Props) => {
  console.log(products)
  return (
    <div className="mx-auto max-w-[1240px]">
      <Head>
        <title>Sản phẩm</title>
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
                <Link href="/">Tất cả sản phẩm</Link>
              </li>
            </ul>
          </div>
          <h1 className="text-3xl font-sans font-semibold pt-50">Tất cả sản phẩm</h1>
        </section>
        <section className="mx-auto max-w-[1240px]">
        <div className="grid  lg:grid-cols-4   md:grid-cols-3    grid-cols-2 gap-2   ">
           
                {products.map((item, index) => (
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
                          <span className="  text-[12px]">Pacgake tour </span>
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
                 
              ))}
    

          </div>
       
        </section>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await await getAll();;
  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};
export default Product;
