import React from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addUser } from "../Api/auth";
import { useRouter } from "next/router";
import Head from "next/head";
import { NextPage } from "next";
type Props = {};

type Inputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
};



const Register: NextPage<any> = ({ providers}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    try {
      await addUser(values);
      reset();
      toast.success("Đăng ký thành công, vui lòng đăng nhập");
      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  };

  return (
    <div className="container-base pt-[15px]">
      <Head>
        <title>Signup</title>
      </Head>
      <div className="menu_top ">
        <span className="text-[#ff5722]">
          <a href="" className="text-[#000000]">
            Trang chủ
          </a>{" "}
          / Đăng ký tài khoản
        </span>
      </div>
      <div className="row pt-[60px] text-center">
        <div className="page-login">
          <h1 className="text-2xl font-semibold">Đăng ký</h1>
          <div className="pt-[15px]">
            {" "}
            <span>
              Đã có tài khoản, đăng nhập
              <a href="" className="hover:text-[#ff5722]">
                {" "}
                tại đây
              </a>
            </span>
          </div>
        </div>
        <div className="section">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-signup">
              <div>
                <input
                  type="text"
                  {...register("name", { required: "Vui lòng nhập họ tên" })}
                  className="mt-[20px] px-[20px] outline-none border-solid border-[1px] border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                  placeholder="Họ tên"
                />
                <p className="text-red-400">{errors.name?.message}</p>
              </div>

              <div>
                <input
                  type="text"
                  {...register("email", { required: "Vui lòng nhập email" })}
                  className="mt-[17px] px-[20px] outline-none border-solid border-[1px] border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                  placeholder="Email"
                />
                <p className="text-red-400">{errors.email?.message}</p>
              </div>

              <div>
                <input
                  {...register("phone", { required: "Vui lòng nhập số điện thoại" })}
                  type="text"
                  className="mt-[17px] px-[20px] outline-none border-solid border-[1px] border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                  placeholder="Số điện thoại"
                />
                <p className="text-red-400">{errors.phone?.message}</p>
              </div>

              <div>
                <input
                  type="password"
                  {...register("password", { required: "Vui lòng nhập mật khẩu" })}
                  className="mt-[17px] px-[20px] outline-nonemt-[17px] outline-none border-solid border-[1px] border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                  placeholder="Mật khẩu"
                />
                <p className="text-red-400">{errors.password?.message}</p>
              </div>
            </div>
            <button className="bg-[#ff5722] text-white mt-[17px] w-[100%] md:w-[30%] h-[40px] font-semibold">
              ĐĂNG KÝ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
