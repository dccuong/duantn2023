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
  getproductleast1,
  getproductleast7,
  getproductmost,
} from "../../redux/productSlice";
import { RootState } from "../../redux/store";
import { getUsers } from "../../redux/userSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { get, getOrderByUser } from "../../Api/orderApi";
import { Order } from "../../models/order";
import { formatCurrency } from "../../untils";
import LineChart from "../../component/LineChart";
import { getOrders } from "../../redux/orderSlice";
import moment from "moment";

type Props = {};

const Dashboard: NextPageWithLayout = (props: Props) => {
  const products = useSelector((state: RootState) => state.product.products);

  const productmost = useSelector(
    (state: RootState) => state.product.productmost
  );
  const totalprice = useSelector(
    (state: RootState) => state.product.totalprice
  );
  const totalprice1 = useSelector(
    (state: RootState) => state.product.total1price
  );
  const [startDate, setStartDate] = useState(new Date());
  const totalprice7 = useSelector(
    (state: RootState) => state.product.total7price
  );
  console.log(totalprice, "123123");
  const [orders, setOrders] = useState<any[]>([]);

  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<any>();
  const handleDateChange = (date: any) => {
    setStartDate(date);
    const formattedDate = moment(date).format("MM/DD/YY");
    dispatch(getproductleast1(formattedDate)).unwrap();
  };
  useEffect(() => {
    (async () => {
      try {
        await dispatch(getproduct()).unwrap();
        await dispatch(getproductmost()).unwrap();
        await dispatch(getproductleast()).unwrap();
        await dispatch(getproductleast7()).unwrap();
        handleDateChange(startDate);
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
                <div className=" flex">
                  <div className="w-[40%]">
                    <span className="block font-semibold">
                      Các sản phẩm bán chay nhất
                    </span>
                    {productmost.map((item, index) => (
                      <div
                        className={
                          index > 2
                            ? "hidden"
                            : "" +
                              "flex m-2 p-2 bg-orange-400 rounded-lg items-center"
                        }
                        key={index}
                      >
                        <div className="w-[60px] rounded-md mr-2">
                          <img src={item.image} className="rounded-lg" alt="" />
                        </div>
                        <div>
                          <div className=" font-semibold text-white">
                            {item.name}
                          </div>
                          <div className=" font-semibold text-white">
                            {" "}
                            Bán được :{item.buy}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-[40%]">
                    <span className="block font-semibold"> Bán Ế Nhất</span>
                    {productmost.map((item, index) => (
                      <div
                        className={
                          index < productmost.length - 3
                            ? "hidden"
                            : "" +
                              "flex m-2 p-2 bg-slate-400 rounded-lg items-center"
                        }
                        key={index}
                      >
                        <div className="w-[60px] rounded-md mr-2">
                          <img src={item.image} className="rounded-lg" alt="" />
                        </div>
                        <div>
                          <div className=" font-semibold text-white">
                            {item.name}
                          </div>
                          <div className=" font-semibold text-white">
                            {" "}
                            Bán được :{item.buy}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
            <div className="rounded-r-md  shadow-sm items-center px-3 py-2 leading-snug border-y border-r">
              <div className="flex  flex-1 justify-between mb-3">
                <div>
                  <span className="block font-semibold">Doanh thu hôm nay</span>
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yy"
                  />
                  {totalprice1?.map((item, index) => (
                    <span className="block text-gray-500" key={index}>
                      <b>{item._id} </b> == {formatCurrency(item.totalPrice)}
                    </span>
                  ))}
                </div>
                <div className="w-[70%]"></div>
              </div>
              <div className="flex  flex-1 justify-between  mb-3">
                <div>
                  <span className="block font-semibold">Doanh thu</span>
                  {totalprice?.map((item, index) => (
                    <span className="block text-gray-500" key={index}>
                      {" "}
                      <b>{item._id} </b> == {formatCurrency(item.totalPrice)}
                    </span>
                  ))}
                </div>
                <div className="w-[70%]">
                  <LineChart data={totalprice} />
                </div>
              </div>

              <div className="flex  flex-1 justify-between mb-3">
                <div>
                  <span className="block font-semibold">Doanh thu</span>
                  {totalprice7?.map((item, index) => (
                    <span className="block text-gray-500" key={index}>
                      <b>{item._id} </b> == {formatCurrency(item.totalPrice)}
                    </span>
                  ))}
                </div>
                <div className="w-[70%]">
                  <LineChart data={totalprice7} />
                </div>
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
