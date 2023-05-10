import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import React, { ReactElement, useEffect, useState } from "react";
import { AdminLayout } from "../../layouts";
import { NextPageWithLayout } from "../../models/layout";
import {
  getproduct,
  getproductleast,
  getproductmost,
} from "../../redux/productSlice";
import { RootState } from "../../redux/store";
import { getUsers } from "../../redux/userSlice";
import { getOrders } from "../../redux/orderSlice";
import Item from "antd/lib/list/Item";
import { get, getOrderByUser } from "../../Api/orderApi";
import { Order } from "../../models/order";
import { formatCurrency } from "../../untils";

type Props = {};

const Dashboard: NextPageWithLayout = (props: Props) => {
  const products = useSelector((state: RootState) => state.product.products);

  const productmost = useSelector(
    (state: RootState) => state.product.productmost
  );
  const totalprice = useSelector(
    (state: RootState) => state.product.totalprice
  );
  console.log(totalprice,"123123")
  const [orders, setOrders] = useState<any[]>([]);

  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    (async () => {
      try {
        await dispatch(getproduct()).unwrap();
        await dispatch(getproductmost()).unwrap();
        await dispatch(getproductleast()).unwrap();
        await dispatch(getUsers()).unwrap();

        users?.forEach(async (Item) => {
          const res = await getOrderByUser(Item._id!);
          console.log(res.length, "123");
          setOrders([...orders, res]);
        });

        await dispatch(getOrders()).unwrap();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <header className="fixed top-0 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <h5>Dashboard</h5>
        </div>
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {" "}
          Dashboard{" "}
        </button>
      </header>
      <div className="p-6 mt-10 overflow-hidden">
        <section className="">
          <div className=" bg-white">
            <div className="bg-indigo-500 flex items-center p-3 text-white rounded-l-md">
              Tổng số người dùng
            </div>
            <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
              <div>
                <span className="block font-semibold">Tài khoản</span>
                <span className="block text-gray-500">
                  {users?.length} Members
                </span>
              </div>
              <div className="text-gray-500">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>
          <div className=" bg-white">
            <div className="bg-yellow-500 flex items-center p-3 text-white rounded-l-md">
              Sản Phẩm
            </div>
            <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
              <div>
                <span className="block font-semibold">Sản phẩm</span>
                <span className="block text-gray-500">
                  {products?.length} Sản phẩm
                </span>
                <span className="block font-semibold">
                  Các sản phẩm bán chay nhất
                </span>
                {productmost.map((item, index) => (
                  <div className={index > 2 ? "hidden" : ""} key={index}>
                    <span>{item.name}</span> {"+>"} bán được{" "}
                    <span>{item.buy}</span>
                  </div>
                ))}

                <span className="block font-semibold"> Bán Ế Nhất</span>
                {productmost.map((item, index) => (
                  <div 
                  key={index}
                    className={index < productmost.length - 4 ? "hidden" : ""}
                  >
                    <span>{item.name}</span> {"+>"} bán được{" "}
                    <span>{item.buy}</span>
                  </div>
                ))}
                <span className="block text-gray-500"> </span>
              </div>
              <div className="text-gray-500">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>
          <div className=" bg-white">
            <div className="bg-green-500 flex items-center px-3 text-white rounded-l-md">
              DT
            </div>
            <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
              <div>
                <span className="block font-semibold">Doanh thu</span>
                {totalprice?.map((item, index) => (
                  
                  <span className="block text-gray-500" key={index}> <b>{item._id} </b> == {formatCurrency(item.totalPrice)}</span>
                ))}
              </div>
              <div className="text-gray-500">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Dashboard.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;
