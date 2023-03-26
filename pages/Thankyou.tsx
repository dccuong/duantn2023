import React from "react";
import crypto from "crypto";

type Props = {};

const Thankyou = (props: Props) => {
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

  const vnp_TxnRef = queryParameters.get("vnp_TxnRef");
  console.log(vnp_BankCode,vnp_BankTranNo,vnp_CardType,vnp_OrderInfo,vnp_PayDate,vnp_ResponseCode,vnp_TmnCode,vnp_TransactionNo,vnp_TransactionStatus)
  const signData = `${
    `${vnp_Amount}` +
 
    `${vnp_BankCode}` +
    `${vnp_BankTranNo}`+
    `${vnp_CardType}` +
    `${vnp_OrderInfo}` +
    `${vnp_PayDate}`+
    `${vnp_ResponseCode}` +
    `${vnp_TmnCode}`+
    `${vnp_TransactionNo}` +
    `${vnp_TransactionStatus}`+
    `${vnp_TxnRef}`
  }`;
  console.log(signData);
  let hmac = crypto.createHmac("sha512", "ZPTGSZUBDGKRWWSRAEPICFEUDQSOUJMO");
  return <div>{signData}</div>;
  
};

export default Thankyou;
