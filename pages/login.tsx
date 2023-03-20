import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { loginnn } from "../Api/auth";
import { Tuser } from "../models/user";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getProviders, useSession, signIn } from "next-auth/react";
import { NextPage } from "next";
import { login as signinAction } from "../redux/auth";
import Link from "next/link";
import Head from "next/head";

type Props = {};
type Inputs = {
  email: string;
  password: string;
};

const Login: NextPage<any> = ({ providers }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit = async (values: Inputs) => {
    try {
      const { token, user } = await loginnn(values);
      toast.success("Đăng nhập thành công");
      reset();

      dispatch(signinAction(user));
      localStorage.setItem("auth_token", token);

      // admin
      if (user.role === 1) {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  };

  return (
    <div className="container-base pt-[15px]">
      <Head>
        <title>Signin</title>
      </Head>
      <div className="menu_top ">
        <span className="text-[#4d8a54]">
          <a href="" className="text-[#000000]">
            Trang chủ
          </a>{" "}
          / Đăng nhập tài khoản
        </span>
      </div>
      <div className="row pt-[60px] text-center">
        <div className="page-login">
          <h1 className="text-2xl font-semibold">Đăng nhập</h1>
          <div className="pt-[15px]">
            {" "}
            <span>
              Nếu bạn chưa có tài khoản,
              <Link href="/signup">
                <span className="cursor-pointer hover:text-[#4d8a54]"> đăng ký tại đây</span>
              </Link>
            </span>
          </div>
        </div>
        <div className="section">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-signup">
              <div>
                <input
                  type="text"
                  {...register("email", { required: "Vui lòng nhập email" })}
                  className="mt-[20px] px-[20px] outline-none border-solid border-[1px] border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                  placeholder="Email"
                />
                <p className="text-red-400">{errors.email?.message}</p>
              </div>

              <div>
                <input
                  type="password"
                  {...register("password", { required: "Vui lòng nhập mật khẩu" })}
                  className="mt-[17px] px-[20px] outline-none border-solid border-[1px] border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                  placeholder="Mật khẩu"
                />
                <p className="text-red-400">{errors.password?.message}</p>
              </div>
            </div>
            <button className="bg-[#4d8a54] text-white mt-[17px] w-[100%] md:w-[30%] h-[40px] font-semibold">
              ĐĂNG NHẬP
            </button>
          </form>
          <div className="pt-[20px]">
            <a href="" className="">
              Quên mật khẩu
            </a>
          </div>

          <div className="login-fb pt-[50px] pb-[50px]">
            <p>Hoặc đăng nhập bằng</p>
            <div className="pt-[20px]">
              {" "}
              <a href="">
                <img
                  src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                  className=""
                  alt=""
                  width={129}
                  height={36}
                />
              </a>
              <a href="">
                <img
                  src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                  className=""
                  alt=""
                  width={129}
                  height={36}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
