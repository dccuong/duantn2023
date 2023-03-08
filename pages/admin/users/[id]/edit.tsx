import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { get } from "../../../../Api/auth";
import { AdminLayout } from "../../../../layouts";
import { typeUser } from "../../../../models/user";
import { upUser } from "../../../../redux/userSlice";
type Props = {};

const EditUser = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<typeUser>();
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const { id } = router.query;
  const onSubmit: SubmitHandler<typeUser> = async (value: typeUser) => {
    try {
      await dispatch(upUser(value)).unwrap();
      toast.success("okok");
      router.push("/admin/users");
    } catch (error) {
      toast.error("lỗi");
      console.log(error);
    }
  };
  useEffect(() => {
    const getA = async () => {
      const data = await get(Number(id));
      reset(data.data);
    };
    getA();
  }, [reset]);
  return (
    <div>
      <div>
        <Head>
          <title>Users</title>
        </Head>
        <header className="z-10 fixed top-0 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
              Users
            </h5>
            <span>Edit Users</span>
          </div>
        </header>
        <div className="p-6 mt-8 overflow-hidden">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg px-3 py-3">
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Users"
                      >
                        User Name
                      </label>

                      <input
                        id="Users"
                        className="shadow appearance-none border rounded w-full py-2 px-3  mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="UserName"
                        {...register("Username", { required: true })}
                      />
                      {errors.Username?.type === "required" && (
                        <span className="text-red-700">is required</span>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="fullname"
                      >
                        fullname
                      </label>
                      <input
                        id="fullname"
                        className="shadow appearance-none border rounded w-full py-2 px-3  mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="fullname"
                        {...register("Fullname", { required: true })}
                      />
                      {errors.Fullname?.type === "required" && (
                        <span className="text-red-700">is password</span>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="pass"
                      >
                        Password
                      </label>
                      <input
                        id="pass"
                        className="shadow appearance-none border rounded w-full py-2 px-3  mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="password"
                        {...register("Password", { required: true })}
                      />
                      {errors.Password?.type === "required" && (
                        <span className="text-red-700">is password</span>
                      )}
                    </div>
                    <button className=" bg-blue-500 rounded-md px-4 py-2 text-white mt-5 mb-5">
                      Edit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditUser.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default EditUser;
