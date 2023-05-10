import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "../../../models/layout";
import { ClientLayout } from "../../../layouts";
import ProfileLayout from "../../../layouts/Pro5Layout";
import { Order } from "../../../models/order";
import { getOrderByUser } from "../../../Api/orderApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Tuser } from "../../../models/user";
import moment from "moment";
import { formatCurrency } from "../../../untils";
import Head from "next/head";
import Swal from "sweetalert2";
import { updateStt } from "../../../redux/orderSlice";
type Props = {};

const Myoder: NextPageWithLayout = (props: Props) => {
  const [orders, setOrders] = useState<Order[]>();
  const [reload, setReload] = useState<boolean>(false);
  const currentUser = useSelector(
    (state: RootState) => state.auth.currentUser
  ) as Tuser;
  const dispatch = useDispatch<any>();
  const handleUpdateStt = (stt: number, orderid: any) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn cập nhật trạng thái?",
      text: "Không thể hoàn tác sau khi cập nhật",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(updateStt({ orderId: orderid, status: stt })).unwrap();
        Swal.fire("Hủy thành công!", "Cập nhật thành công.", "success");
        window.location.reload();
      }
    });
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await getOrderByUser(currentUser?._id!);
        console.log(res, "orderuser");
        setOrders(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currentUser?._id]);

  return (
    <>
      <Head>
        <title>My Order</title>
      </Head>

      <p className="font-quicksand text-[19px] leading-[26px] pb-3">
        ĐƠN HÀNG CỦA BẠN
      </p>
      <div className="overflow-x-auto relative shadow-md ">
        <table className="w-full text-sm text-left">
          <thead className="md:text-[13px] text-[10px]  text-white uppercase bg-[#FF5722] md:h-[40px] h-[30px] ">
            <tr>
              <th scope="col" className="py-3 px-6 border-[1px] ">
                Đơn hàng
              </th>
              <th scope="col" className="py-3 px-6 border-[1px]">
                Khách hàng
              </th>
              <th scope="col" className="py-3 px-6 border-[1px]">
                Ngày
              </th>
              <th scope="col" className="py-3 px-6 border-[1px]">
                Giá trị đơn hàng
              </th>
              <th scope="col" className="py-3 px-6 border-[1px]">
                TT đơn hàng
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((item:any, index) => (
              <tr className="bg-white " key={index}>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap text-blue-500 hover:text-black"
                >
                  <Link href={`/profile/myorder/${item._id}`}>
                    <span className="cursor-pointer">
                      #{item._id?.substring(0, 5)}...
                    </span>
                  </Link>
                </th>
                <td className="py-4 px-6">
                  <p>{item.customerName}</p>
                  <p>{item.phone}</p>
                </td>
                <td className="py-4 px-6">
                  {moment(item.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                </td>
                <td className="py-4 px-6">{formatCurrency(item.totalPrice)}</td>
                <td className="py-4 px-6 text-left">
                  <span className="p-1">
                    {!item.status
                      ? "Đơn hàng mới"
                      : item.status === 1
                      ? "Đã xác nhận"
                      : item.status === 2
                      ? "Đang giao hàng"
                      : item.status === 3
                      ? "Đã giao hàng"
                      : "Đã hủy"}
                  </span>
                  <br />
                  {item.status < 3 && (
                    <button
                      className="p-1 text-white bg-[#FF5722]"
                      onClick={() => {
                       
                        handleUpdateStt(4, item._id);
                      }}
                    >
                      Hủy đơn hàng
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

Myoder.getLayout = (page: ReactElement) => (
  <ClientLayout>
    <ProfileLayout>{page}</ProfileLayout>
  </ClientLayout>
);

export default Myoder;
