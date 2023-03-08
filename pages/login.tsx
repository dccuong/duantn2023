import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { loginGg, loginnn } from "../Api/auth";
import { Tuser } from "../models/user";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth";
import { getProviders, useSession, signIn } from "next-auth/react";
import { NextPage } from "next";
import { Carousel, Tabs } from "antd";
import Link from "next/link";

type Props = {};

const Login: NextPage<any> = ({ providers }) => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const [pass, showPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Tuser>();
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const onsubmit = async (value: Tuser) => {
    console.log(value);
    try {
      const { token, user } = await loginnn(value);
      dispatch(login(user));
      localStorage.setItem("auth_token", token);
      toast.success("Đăng nhập thành công");
      if (token) {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error: any) {
      console.log(error.response.data);
      toast.error(`${error.response.data.error}`);
    }
  };
  return (
    <div>
      <div className="relative ">
        <Carousel autoplay>
          <img src="/2.png" alt="" className={""} />

          <img src="/2.png" alt="" className={" "} />
        </Carousel>
        <div className=" sm:absolute top-[5%] 2xl:top-[10%] xl:right-[259px] sm:right-[65px] h-[85%] lg:w-[30%] sm:w-[85%]   m-3">
          {" "}
          <div className=" md:bg-white  rounded-xl   ">
            <div className="xl:pt-6 pt-3 mx-8">
              <div className="lg:block flex justify-between">
                <div>
                  <div className="text-[26px] font-medium leading-8">
                    Đăng nhập
                  </div>
                  <p className="text-[12px] text-gray-500">
                    Tài khoản TripFinder sẽ được đăng nhập bằng SĐT hoặc
                    <br />
                    tài khoản bên thứ ba đã đăng ký
                  </p>
                </div>
                <div className="flex justify-around items-center  lg:my-4 my-2">
                  <div className="">
                    <div className=" w-[40px] mx-auto h-[40px] rounded-full bg-slate-700"></div>
                    <div>facebook</div>
                  </div>
                  <div className="">
                    <div className=" w-[40px] mx-auto h-[40px] rounded-full bg-slate-700"></div>
                    <div>facebook</div>
                  </div>
                  <div className="">
                    <div className=" w-[40px] mx-auto h-[40px] rounded-full bg-slate-700"></div>
                    <div>facebook</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around items-center xl:my-2">
                <span className="border-2 border-gray-500 bg-slate-500 w-[25%]"></span>
                <div className="text-[12px] text-gray-500">
                  hoặc đăng nhập bằng
                </div>
                <span className="border-2 border-gray-500 bg-slate-500 w-[25%]"></span>
              </div>
              <div className=" font-medium ">
                <nav className="flex justify-center">
                  {" "}
                  <Link href="./login">
                    <div
                      className={
                        router.asPath == "/login"
                          ? "active   border-b-4 border-orange-500 text-orange-500 xl:p-2 p-1 "
                          : "p-1  xl:p-2"
                      }
                    >
                      Đăng nhập sđt
                    </div>
                  </Link>
                  <Link href="/login#email">
                    <div
                      className={
                        router.asPath == "/login#email"
                          ? "active   border-b-4 border-orange-500 text-orange-500  xl:p-2  p-1"
                          : " xl:p-2 p-1"
                      }
                    >
                      Đăng nhập Email
                    </div>
                  </Link>
                </nav>
                <div>
                  {" "}
                  <div
                    className={
                      router.asPath == "/login" ? "active block" : "hidden"
                    }
                  >
                    <form className=" w-full" onSubmit={handleSubmit(onsubmit)}>
                      <div className="mx-3 flex">
                        <select className="w-[60px] py-1 2xl:py-3 mr-1 border my-1 2xl:my-3 rounded-md ">
                          <option value="84">+84</option>
                          <option value="B">Banana</option>
                          <option value="C">Cranberry</option>
                        </select>
                        <div className="relative w-[100%]">
                          <input
                            type="number"
                            id="username"
                            className="py-1 2xl:py-3 mx-auto border w-[100%] my-1 2xl:my-3 rounded-md "
                            placeholder="Phone Number"
                            {...register("name", { required: true })}
                          />
                          {errors.name?.type === "required" && (
                            <span className="text-red-700">is required</span>
                          )}
                          <img
                            src="https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png"
                            className="absolute top-[30%] 2xl:top-[35%] right-1 w-[18px]"
                          />
                        </div>
                      </div>
                      <div className="mx-3">
                        <button
                          placeholder=" gửi xác nhận "
                          className="py-1 2xl:py-3 border w-[100%] rounded-md my-1 2xl:my-3"
                        >
                          {" "}
                          gửi xác nhận
                        </button>
                      </div>
                      <div className="mx-3">
                        <button
                          type="submit"
                          className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-normal rounded-lg  my-1 2xl:my-3 py-1 2xl:py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Đăng nhập
                        </button>
                      </div>
                      <div className=" w-full  rounded-b-md px-3 flex justify-between  items-center">
                        <div>
                          <input type="radio" />
                          <span className="text-[12px]"> Nhớ mật khẩu </span>
                        </div>
                        <Link href={"register"}>
                          <button className=" bo-neutral-700 rounded-sm">
                            {" "}
                            <span className="text-[12px] px-1">
                              Quên mật khẩu?
                            </span>
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  {" "}
                  <div
                    className={
                      router.asPath == "/login#email"
                        ? "active block"
                        : "hidden"
                    }
                  >
                    <form className=" w-full" onSubmit={handleSubmit(onsubmit)}>
                      <div className="mx-3">
                        <div className="relative w-[100%]">
                          <input
                            type="text"
                            id="username"
                            className="my-1 2xl:my-3 py-1 2xl:py-3 mx-auto border w-[100%] rounded-md "
                            placeholder="Phone Number"
                            {...register("name", { required: true })}
                          />
                          {errors.name?.type === "required" && (
                            <span className="text-red-700">is required</span>
                          )}
                          <img
                            src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"
                            className="absolute top-[30%] right-1 w-[20px]"
                          />
                        </div>
                      </div>
                      <div className="mx-3">
                        <div className="relative w-[100%]">
                          <input
                            type={pass ? `text` : "password"}
                            id="password"
                            placeholder="••••••••"
                            className="my-1 2xl:my-3 py-1 2xl:py-3 border w-[100%] rounded-md "
                            {...register("password", { required: true })}
                          />
                          {errors.password?.type === "required" && (
                            <span className="text-red-700">is required</span>
                          )}
                          <div
                            className="absolute top-[30%] 2xl:top-[35%] right-1 w-[20px] "
                            onClick={() => {
                              showPass(pass ? false : true);
                            }}
                          >
                            <img
                              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/eye-1792481-1522870.png"
                              className="w-[20px]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mx-3">
                        <button
                          type="submit"
                          className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-normal rounded-lg  my-1 2xl:my-3 py-1 2xl:py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Đăng nhập
                        </button>
                      </div>
                      <div className=" w-full  rounded-b-md px-3 flex justify-between  items-center">
                        <div>
                          <input type="radio" />
                          <span className="text-[12px]"> Nhớ mật khẩu </span>
                        </div>
                        <Link href={"register"}>
                          <button className=" bo-neutral-700 rounded-sm">
                            {" "}
                            <span className="text-[12px] px-1">
                              Quên mật khẩu?
                            </span>
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full bg-[#FFA588] rounded-b-xl py-1 px-3 mt-3 2xl:mt-6 flex justify-around items-center">
              <span className="text-[12px]"> Bạn chưa có tài khoản ? </span>{" "}
              <Link href={"register"}>
                <button className="border-2 border-gray-50 bo-neutral-700 rounded-sm">
                  {" "}
                  <span className="text-[12px] px-1"> Đăng kí ngay </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="text-[12px] text-white font-normal text-center">
            Bằng cách đăng ký hoặc đăng nhập, bạn đã hiểu và đồng ý với
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
