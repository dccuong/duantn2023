import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement, useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File to the _app.js
import { get } from "../../../../Api/blogApi";
import { AdminLayout } from "../../../../layouts";
import { Tblog } from "../../../../models/blogs";

import { getBlog, updateBlog} from "../../../../redux/blogSlice";

type Props = {};
const Edit = (props: Props) => {
  const [value, setValue] = useState<string>("");
  console.log("state", value);
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const { id } = router.query;
  const newid = Number(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Tblog>();
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
          ],
        },
      ],

      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  const onSubmit: SubmitHandler<any> = async ({ Title }: any) => {
    const data: Tblog = {
      _id: newid,
      title:Title,
      content: value,
   
    };
    console.log(data);
    await dispatch(updateBlog(data)).unwrap();
    toast.success("Sửa bài viết thành công");
    router.push("/admin/blogs");
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await get(newid);
        console.log("day la res", data);
        const response = { ...data };
        // const data = response.content;
        reset(response);
        console.log("data", response);
        setValue(data.content);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [newid, reset]);
  return (
    <div>
      <div>
        <Head>
          <title>Blogs</title>
        </Head>
        <header className="z-10 fixed top-0 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
              Blogs
            </h5>
            <span>Edit Blogs</span>
          </div>
        </header>
        <div className="p-6 mt-8 overflow-hidden">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg px-5">
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <p className=" text-center"> Edit </p>
                    <div className="flex justify-between">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Title"
                      >
                        Title
                      </label>
                      <div> date: 12/12/122</div>
                    </div>
                    <input
                      id="Title"
                      className="shadow appearance-none border rounded w-full py-2 px-3  mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Name"
                      {...register("title", { required: true })}
                    />

                    <button className=" bg-blue-500 rounded-md px-4 py-2 text-white mt-5">
                      Add
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
Edit.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default Edit;
