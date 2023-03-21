import Head from "next/head";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AdminLayout } from "../../../layouts";
import { NextPageWithLayout } from "../../../models/layout";
import { TSlider } from "../../../models/slider";
import { addSlider } from "../../../redux/sliderSlice";
// import { addUser } from "../../../redux/userSlice";
import { uploadImage } from "../../../untils";

type Props = {};

type Inputs = {
  title: string;
  url1: {
    0: File;
  };
  url2: {
    0: File;
  };
  url3: {
    0: File;
  };
  url4: {
    0: File;
  };
  url5: {
    0: File;
  };
};

const AddSlider: NextPageWithLayout = (props: Props) => {
  const [preview1, setPreview1] = useState<string>();
  const [preview2, setPreview2] = useState<string>();
  const [preview3, setPreview3] = useState<string>();
  const [preview4, setPreview4] = useState<string>();
  const [preview5, setPreview5] = useState<string>();
  const dispatch = useDispatch<any>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSlider>();

  const onSubmit: SubmitHandler<any> = async (values: Inputs) => {
    try {
      const data1 = await uploadImage(values.url1[0]);
      const data2 = await uploadImage(values.url2[0]);
      const data3 = await uploadImage(values.url3[0]);
      const data4 = await uploadImage(values.url4[0]);
      const data5 = await uploadImage(values.url5[0]);

      const valuesss = {
        title: values.title,
        url1: data1.data.url,
        url2: data2.data.url,
        url3: data3.data.url,
        url4: data4.data.url,
        url5: data5.data.url,
      };
      await dispatch(addSlider(valuesss)).unwrap();
      toast.success("Thêm ảnh thành công");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Add User</title>
      </Head>
      <header className="z-10 fixed top-0 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
            Blogs
          </h5>
          <span>Add Blog</span>
        </div>
        <Link href="/admin/blogs">
          <button
            type="button"
            className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            DS Bài viết
          </button>
        </Link>
      </header>

      <div className="p-6 mt-24 overflow-hidden">
        <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <span className="font-semibold mb-4 block text-xl">
                Thêm bài viết mới
              </span>
              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-6">
                  <label
                    htmlFor="form__add-user-fullname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("title", {
                      required: "Vui lòng không để trống",
                    })}
                    id="form__add-user-fullname"
                    className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder=""
                  />
                  <div className="text-sm mt-0.5 text-red-500">
                    {errors.title?.message}
                  </div>
                </div>

                <div className="col-span-6 flex">
                  <div className="w-[30%]">
                    <label className="block text-sm font-medium text-gray-700">
                      Xem trước ảnh
                    </label>
                    <div className="mt-1 w-40 h-40 relative">
                      <picture>
                        <img
                          src={
                            preview1 ||
                            "https://drums71.ru/wp-content/uploads/2018/02/no-img.jpg"
                          }
                          alt="Preview Image"
                          className="h-40 w-40  object-cover"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="w-[70%]">
                    <label className="block text-sm font-medium text-gray-700">
                      Ảnh 1
                    </label>
                    <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="form__add-user-avatar1"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="form__add-user-avatar1"
                              {...register("url1", {
                                required: "Vui lòng chọn ảnh",
                              })}
                              onChange={(e: any) => {
                                setPreview1(
                                  URL.createObjectURL(e.target.files[0])
                                );
                              }}
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm mt-0.5 text-red-500">
                    {errors.url1?.message}
                  </div>
                </div>

                <div className="col-span-6 flex">
                  <div className="w-[30%]">
                    <label className="block text-sm font-medium text-gray-700">
                      Xem trước ảnh
                    </label>
                    <div className="mt-1 w-40 h-40 relative">
                      <picture>
                        <img
                          src={
                            preview2 ||
                            "https://drums71.ru/wp-content/uploads/2018/02/no-img.jpg"
                          }
                          alt="Preview Image"
                          className="h-40 w-40  object-cover"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="w-[70%]">
                    <label className="block text-sm font-medium text-gray-700">
                      Ảnh bài viết
                    </label>
                    <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="form__add-user-avatar2"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="form__add-user-avatar2"
                              {...register("url2", {
                                required: "Vui lòng chọn ảnh",
                              })}
                              onChange={(e: any) => {
                                setPreview2(
                                  URL.createObjectURL(e.target.files[0])
                                );
                              }}
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm mt-0.5 text-red-500">
                    {errors.url1?.message}
                  </div>
                </div>

                <div className="col-span-6 flex">
                  <div className="w-[30%]">
                    <label className="block text-sm font-medium text-gray-700">
                      Xem trước ảnh
                    </label>
                    <div className="mt-1 w-40 h-40 relative">
                      <picture>
                        <img
                          src={
                            preview3 ||
                            "https://drums71.ru/wp-content/uploads/2018/02/no-img.jpg"
                          }
                          alt="Preview Image"
                          className="h-40 w-40  object-cover"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="w-[70%]">
                    <label className="block text-sm font-medium text-gray-700">
                      Ảnh bài viết
                    </label>
                    <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="form__add-user-avatar3"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="form__add-user-avatar3"
                              {...register("url3", {
                                required: "Vui lòng chọn ảnh",
                              })}
                              onChange={(e: any) => {
                                setPreview3(
                                  URL.createObjectURL(e.target.files[0])
                                );
                              }}
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm mt-0.5 text-red-500">
                    {errors.url1?.message}
                  </div>
                </div>

                <div className="col-span-6 flex">
                  <div className="w-[30%]">
                    <label className="block text-sm font-medium text-gray-700">
                      Xem trước ảnh
                    </label>
                    <div className="mt-1 w-40 h-40 relative">
                      <picture>
                        <img
                          src={
                            preview4 ||
                            "https://drums71.ru/wp-content/uploads/2018/02/no-img.jpg"
                          }
                          alt="Preview Image"
                          className="h-40 w-40  object-cover"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="w-[70%]">
                    <label className="block text-sm font-medium text-gray-700">
                      Ảnh bài viết
                    </label>
                    <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="form__add-user-avatar4"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="form__add-user-avatar4"
                              {...register("url4", {
                                required: "Vui lòng chọn ảnh",
                              })}
                              onChange={(e: any) => {
                                setPreview4(
                                  URL.createObjectURL(e.target.files[0])
                                );
                              }}
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm mt-0.5 text-red-500">
                    {errors.url1?.message}
                  </div>
                </div>

                <div className="col-span-6 flex">
                  <div className="w-[30%]">
                    <label className="block text-sm font-medium text-gray-700">
                      Xem trước ảnh
                    </label>
                    <div className="mt-1 w-40 h-40 relative">
                      <picture>
                        <img
                          src={
                            preview5 ||
                            "https://drums71.ru/wp-content/uploads/2018/02/no-img.jpg"
                          }
                          alt="Preview Image"
                          className="h-40 w-40  object-cover"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="w-[70%]">
                    <label className="block text-sm font-medium text-gray-700">
                      Ảnh bài viết
                    </label>
                    <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="form__add-user-avatar5"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="form__add-user-avatar5"
                              {...register("url5", {
                                required: "Vui lòng chọn ảnh",
                              })}
                              onChange={(e: any) => {
                                setPreview5(
                                  URL.createObjectURL(e.target.files[0])
                                );
                              }}
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm mt-0.5 text-red-500">
                    {errors.url1?.message}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Thêm bài viết
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

AddSlider.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default AddSlider;
