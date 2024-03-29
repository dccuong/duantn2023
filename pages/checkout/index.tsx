import crypto from "crypto";
import dateFormat from "dateformat";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, addOrderDetail } from "../../Api/orderApi";
import CartNav from "../../component/CartNav";
import { Tuser } from "../../models/user";
import {
  finishOrder,
  selectCarts,
  selectTotalPrice,
} from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import { formatCurrency } from "../../untils";

type Props = {};

type Inputs = {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  message: string;
};

const CheckoutPage = (props: Props) => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const [checPay, setCheckPay] = useState(false);
  const currentUser = useSelector(
    (state: RootState) => state.auth.currentUser
  ) as Tuser;
  const carts = useSelector(selectCarts);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const router = useRouter();
  const vnPayy = (vnp_Amount: any) => {
    let date = new Date();
    let createDate = Number(dateFormat(date, "yyyymmddHHmmss")) + 700;
    console.log(createDate, "createDate");
    console.log(vnp_Amount);
    const vnp_ExpireDate = createDate + 30000;
    console.log(vnp_ExpireDate, "s");
    let signData = `vnp_Amount=${
      Number(vnp_Amount) * 100
    }&vnp_Command=pay&vnp_CreateDate=${String(
      createDate
    )}&vnp_CurrCode=VND&vnp_ExpireDate=${String(
      createDate + 1000000
    )}&vnp_IpAddr=192.168.0.101&vnp_Locale=vn&vnp_OrderInfo=thanh+toan+don+hang&vnp_OrderType=other&vnp_ReturnUrl=https%3A%2F%2Fduantn2023-git-dev-dccuong.vercel.app%2FThankyou&vnp_TmnCode=OG4BJSNB&vnp_TxnRef=${String(
      createDate
    )}&vnp_Version=2.1.0` as string;

    //var signed = crypto.createHmac("sha512", secretKey).update(signData).digest("hex");

    let hmac = crypto.createHmac("sha512", "ZPTGSZUBDGKRWWSRAEPICFEUDQSOUJMO");

    //passing the data to be hashed
    let data = hmac.update(signData);
    //Creating the hmac in the required format
    let gen_hmac = data.digest("hex");
    console.log(gen_hmac, "gen_hmac");
    let vnpUrl = signData + "&vnp_SecureHash=" + gen_hmac;
    console.log(
      `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?${String(vnpUrl)}`,
      "vnpUrl"
    );

    router.push(
      `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?${String(vnpUrl)}`
    );
    // router.push('/Thankyou?vnp_TransactionStatus=00')
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    if (checPay == false) {
      try {
        // save cart
        const order = await add({
          ...values,
          totalPrice,
          userId: isLogged ? currentUser._id : "",
        });

        // save order detail
        carts.forEach(async (item) => {
          await addOrderDetail({
            orderId: order?._id!,
            productId: item.productId,
            productPrice: item.productPrice,
            quantity: item.quantity,
            size: item.size,
            pay: false,
          });
        });

        dispatch(finishOrder());
        router.push("/Thankyou");
        toast.success("Đặt hàng thành công");
      } catch (error) {
        toast.error("Có lỗi xảy ra, vui lòng thử lại");
      }
    } else {
      localStorage.setItem("order", JSON.stringify(values));
      console.log(values, "order");
      vnPayy(totalPrice);
    }
  };

  useEffect(() => {
    if (isLogged) {
      const { name, email, phone } = currentUser;
      reset({
        customerName: name,
        phone,
        email,
      });
    }
  }, [currentUser, isLogged, reset]);

  return (
    <div className="container-base pt-[15px]">
      <Head>
        <title>Checkout</title>
      </Head>

      <>Thanh Toán</>

      <div className="form-checkout__page">
        <form
          action=""
          className="mx-auto px-3 mt-10 mb-9 grid grid-cols-12 lg:gap-5 gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-span-12 lg:col-span-8  border-t-2 pt-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="uppercase text-gray-500 font-semibold text-lg">
                Thông tin thanh toán
              </h3>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
              <div className="col-span-6 mb-3">
                <label htmlFor="" className="font-semibold mb-1 block">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  {...register("customerName", {
                    required: "Vui lòng nhập họ tên",
                  })}
                  className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                  placeholder="Nhập đầy đủ họ tên"
                />
                <p className="text-red-500 text-sm">
                  {errors.customerName?.message}
                </p>
              </div>
              <div className="col-span-6 mb-3">
                <label htmlFor="" className="font-semibold mb-1 block">
                  Số điện thoại *
                </label>
                <input
                  {...register("phone", {
                    required: "Vui lòng nhập số điện thoại",
                    pattern: {
                      value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                      message: "Số điện thoại không đúng định dạng",
                    },
                  })}
                  type="text"
                  className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                  placeholder="Nhập số điện thoại (tuỳ chọn)"
                />
                <p className="text-red-500 text-sm">{errors.phone?.message}</p>
              </div>
              <div className="col-span-12 mb-3">
                <label htmlFor="" className="font-semibold mb-1 block">
                  Email *
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Vui lòng nhập địa chỉ email",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Email không đúng định dạng, vui lòng nhập lại",
                    },
                  })}
                  className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                  placeholder="Email"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>
              <div className="col-span-12 mb-3">
                <label htmlFor="" className="font-semibold mb-1 block">
                  Địa chỉ *
                </label>
                <input
                  type="text"
                  {...register("address", {
                    required: "Vui lòng nhập địa chỉ người nhận",
                  })}
                  className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                  placeholder="Địa chỉ"
                />
                <p className="text-red-500 text-sm">
                  {errors.address?.message}
                </p>
              </div>
            </div>
            <h3 className="uppercase text-gray-500 font-semibold my-2 text-lg">
              Thông tin bổ sung
            </h3>
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-3">
                <label htmlFor="" className="font-semibold mb-1 block">
                  Ghi chú đơn hàng
                </label>
                <textarea
                  {...register("message")}
                  id=""
                  className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border p-2 text-sm outline-none"
                  placeholder="Ghi chú (tuỳ chọn)"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 border-l p-4 border-2 border-[#ff5722] min-h-40">
            <h3 className="uppercase text-gray-500 font-semibold mb-3 text-lg">
              Đơn hàng của bạn
            </h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="uppercase text-gray-500 text-sm pb-1.5 border-b-2">
                    Sản phẩm
                  </th>
                  <th className="uppercase text-gray-500 text-sm pb-1.5 border-b-2 text-right">
                    Tổng
                  </th>
                </tr>
              </thead>
              <tbody>
                {carts?.map((item, index) => (
                  <tr className="border-b" key={index}>
                    <td className="text-sm leading-5 py-3 text-gray-500 pr-1">
                      <p className="text-base">
                        <span>{item.name}</span>
                        <span>{item.size}</span>
                        <strong> x {item.quantity}</strong>
                      </p>
                    </td>
                    <td className="py-3 font-semibold text-right pl-1">
                      {formatCurrency(item.productPrice + item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-b">
                  <td className="font-semibold text-sm py-2">Tạm tính</td>
                  <td className="font-semibold text-right">
                    {formatCurrency(totalPrice)}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold text-sm py-2">Tổng</td>
                  <td className="font-semibold text-right">
                    {formatCurrency(totalPrice)}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div>
              <button
                onClick={() => {
                  setCheckPay(true);
                }}
                className="w-[100%] mt-4 px-3 py-2 bg-[#ff5722] font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] "
              >
                Đặt hàng và thanh toán
              </button>
              <button
                onClick={() => {
                  setCheckPay(false);
                }}
                className="w-[100%] mt-4 px-3 py-2 bg-[#ff5722] font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
              >
                Thanh toán khi nhận hàng
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
