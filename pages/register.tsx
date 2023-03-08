import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { Tuser } from "../models/user";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { NextPage } from "next";
import { Carousel, Tabs } from "antd";
import Link from "next/link";
import { addUser } from "../Api/auth";

type Props = {};

const Register: NextPage<any> = ({ providers }) => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Tuser>();
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const onSubmit: SubmitHandler<Tuser> = async (value: Tuser) => {
    try {
      await addUser(value);
      toast.success("okok");
    } catch (error) {
      toast.error("lỗi");
    }
  };
  return (
    <div>
      <div className="relative ">
        <Carousel autoplay>
          <img src="/2.png" alt="" className={""} />

          <img src="/2.png" alt="" className={" "} />
        </Carousel>
        <div className=" sm:absolute top-[5%] xl:right-[259px] sm:right-[65px] h-[85%] lg:w-[30%] sm:w-[85%]   m-3">
          {" "}
          <div className=" md:bg-white bg-gradient-to-r from-orange-300 to-blue-500 bg-opacity-70 rounded-xl   ">
            <div className="xl:pt-6 pt-3 mx-8">
              <div className="lg:block flex justify-between">
                <div>
                  <div className="text-[26px] font-medium leading-8">
                    Đăng Ký
                  </div>
                  <p className="text-[12px] text-gray-500">
                    Tài khoản TripFinder sẽ được đăng nhập bằng SĐT hoặc
                    <br />
                    tài khoản bên thứ ba đã đăng ký
                  </p>
                </div>
                <div className="flex justify-around lg:my-4 my-2">
                  <div className="text-center  mx-2">
                    <div className="ml-2 w-[40px] h-[40px] rounded-full bg-slate-700"></div>
                    <div>facebook</div>
                  </div>
                  <div className="text-center  mx-2">
                    <div className="ml-2 w-[40px] h-[40px] rounded-full bg-slate-700"></div>
                    <div>facebook</div>
                  </div>
                  <div className="text-center  mx-2">
                    <div className="ml-2 w-[40px] h-[40px] rounded-full bg-slate-700"></div>
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
                  <Link href="./register">
                    <div
                      className={
                        router.asPath == "/register"
                          ? "active   border-b-4 border-orange-500 text-orange-500 xl:p-2 p-1 "
                          : "p-1  xl:p-2"
                      }
                    >
                      Đăng Ký Sđt
                    </div>
                  </Link>
                  <Link href="/register#email">
                    <div
                      className={
                        router.asPath == "/register#email"
                          ? "active   border-b-4 border-orange-500 text-orange-500  xl:p-2  p-1"
                          : " xl:p-2 p-1"
                      }
                    >
                      Đăng Ký Email
                    </div>
                  </Link>
                </nav>
                <div>
                  {" "}
                  <div
                    className={
                      router.asPath == "/register" ? "active block" : "hidden"
                    }
                  >
                    <form className=" w-full" onSubmit={handleSubmit(onSubmit)}>
                      <div className="mx-3 flex">
                        <select className="w-[60px] py-1 mr-1 border my-1 rounded-md ">
                          <option value="84">+84</option>
                          <option value="B">Banana</option>
                          <option value="C">Cranberry</option>
                        </select>

                        <input
                          type="number"
                          id="username"
                          className="py-1 mx-auto border w-[100%] my-1 rounded-md "
                          placeholder="Phone Number"
                          {...register("name", { required: true })}
                        />
                        {errors.name?.type === "required" && (
                          <span className="text-red-700">is required</span>
                        )}
                      </div>
                      <div className="mx-3">
                        <button
                          placeholder=" gửi xác nhận "
                          className="py-1 border w-[100%] rounded-md my-1"
                        >
                          {" "}
                          gửi xác nhận
                        </button>
                      </div>
                      <div className="mx-3">
                        <button
                          type="submit"
                          className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-normal rounded-lg   py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Đăng nhập
                        </button>
                      </div>
                      <div className=" w-full  rounded-b-md mx-3 flex justify-around items-center">
                        <span className="text-[12px]">
                          {" "}
                          <input type="radio" /> Nhớ mật khẩu{" "}
                        </span>{" "}
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
                      router.asPath == "/register#email"
                        ? "active block"
                        : "hidden"
                    }
                  >
                    <form className=" w-full" onSubmit={handleSubmit(onSubmit)}>
                      <div className="mx-3">
                        <input
                          type="text"
                          id="username"
                          className="py-1 mx-auto border w-[100%] my-1 rounded-md "
                          placeholder="username"
                          {...register("name", { required: true })}
                        />
                        {errors.name?.type === "required" && (
                          <span className="text-red-700">is required</span>
                        )}
                      </div>
                      <div className="mx-3">
                        <input
                          type="password"
                          id="password"
                          placeholder="••••••••"
                          className="py-1 border w-[100%] rounded-md my-1"
                          {...register("password", { required: true })}
                        />
                        {errors.password?.type === "required" && (
                          <span className="text-red-700">is required</span>
                        )}
                      </div>

                      <div className="mx-3">
                        <button
                          type="submit"
                          className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-normal rounded-lg   py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Đăng nhập
                        </button>
                      </div>
                      <div className=" w-full  rounded-b-md mx-3 flex justify-around items-center">
                        <span className="text-[12px]">
                          {" "}
                          <input type="radio" /> Nhớ mật khẩu{" "}
                        </span>{" "}
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
            <div className=" w-full bg-[#FFA588] rounded-b-md py-1 px-3 mt-3 flex justify-around items-center">
              <span className="text-[12px]"> Bạn đã có tài khoản ? </span>{" "}
              <Link href={"login"}>
                <button className="border-2 border-gray-50 bo-neutral-700 rounded-sm">
                  {" "}
                  <span className="text-[12px] px-1"> Đăng Nhập Ngay </span>
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

export default Register;
