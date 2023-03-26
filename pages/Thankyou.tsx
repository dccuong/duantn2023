import React from "react";
import crypto from "crypto";
import { useDispatch, useSelector } from "react-redux";
import { finishOrder, selectCarts, selectTotalPrice } from "../redux/cartSlice";
import { add, addOrderDetail } from "../Api/orderApi";
import { RootState } from "../redux/store";
import { toast } from "react-toastify";
import { Tuser } from "../models/user";
type Props = {};

const Thankyou = (props: Props) => {
    const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const queryParameters = new URLSearchParams(window.location.search);
  console.log(queryParameters);
  const vnp_Amount = queryParameters.get("vnp_Amount");
  console.log(vnp_Amount)
  const vnp_BankCode = queryParameters.get("vnp_BankCode");

  const vnp_BankTranNo = queryParameters.get("vnp_BankTranNo");
  const vnp_CardType = queryParameters.get("vnp_CardType");
  const vnp_OrderInfo = queryParameters.get("vnp_OrderInfo");
  const vnp_PayDate = queryParameters.get("vnp_PayDate");
  const vnp_ResponseCode = queryParameters.get("vnp_ResponseCode");
  const vnp_TmnCode = queryParameters.get("vnp_TmnCode");
  const vnp_TransactionNo = queryParameters.get("vnp_TransactionNo");
  const vnp_TransactionStatus = queryParameters.get("vnp_TransactionStatus");

  const carts = useSelector(selectCarts);
  const totalPrice = useSelector(selectTotalPrice)   ;
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.auth.currentUser
  ) as Tuser;
  let title=""
  console.log(vnp_TransactionNo,vnp_TransactionStatus);
  if(vnp_TransactionStatus=="00"){
    title=" giao dichj thanfh coong"
    try {
      const data:any= localStorage.getItem("order")
      const createOrder=async()=>{
        const order = await add({
            ...data,
              totalPrice,
              userId: isLogged ? currentUser._id : "",
            });
    
            // save order detail
            carts.forEach(async ({ productId, productPrice, quantity }) => {
              await addOrderDetail({
                orderId: order?._id!,
                productId,
                productPrice,
                quantity,
                pay: false,
              });
            });
    
            dispatch(finishOrder());
            toast.success("Đặt hàng thành công");
      }
      createOrder()
      } catch (error) {
        toast.error("Có lỗi xảy ra, vui lòng thử lại");
      }
  }else {
    title="giao dịch không thành công "
  }
  
  let hmac = crypto.createHmac("sha512", "ZPTGSZUBDGKRWWSRAEPICFEUDQSOUJMO");
  return <div>{title}</div>;
  
};

export default Thankyou;


