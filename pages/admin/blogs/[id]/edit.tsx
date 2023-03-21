import axios from "axios";
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
import { updateBlog } from "../../../../redux/blogSlice";

const SunEditor = dynamic(() => import("suneditor-react"), {
  //besure to import dynamically
  ssr: false,
});

type Props = {};
const Edit = (props: Props) => {
  const [sun, setSun] = useState<any>();
  const [sun2, setSun2] = useState<string>();
  console.log("state", sun2);
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
  const handle = (content: any) => {
    setSun(content);
  };
  const onSubmit: SubmitHandler<any> = async ({ Title }: any) => {
    const data: Tblog = {
      _id: newid,
      title:Title,
      content: sun,
    };
    console.log(data);
    await dispatch(updateBlog(data)).unwrap();
    toast.success("Sửa bài viết thành công");
    router.push("/admin/blogs");
  };

  useEffect(() => {
    (async () => {
      try {
        const data= await get(newid);
        console.log("day la res", data);
        const response = { ...data };
        // const data = response.content;
        reset(data);
        console.log("data", data);
        setSun2(data.content);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, newid, reset, sun2]);
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
                    <SunEditor
                      autoFocus={true}
                      lang="en"
                      defaultValue={sun2}
                      setOptions={{
                        showPathLabel: false,
                        minHeight: "50vh",
                        maxHeight: "50vh",

                        buttonList: [
                          ["undo", "redo"],
                          ["font", "fontSize", "formatBlock"],
                          ["paragraphStyle"],
                          [
                            "bold",
                            "underline",
                            "italic",
                            "strike",
                            "subscript",
                            "superscript",
                          ],
                          ["fontColor", "hiliteColor"],
                          ["removeFormat"],
                          "/", // Line break
                          ["outdent", "indent"],
                          ["align", "horizontalRule", "list", "lineHeight"],
                          ["table", "link", "image"],
                        ],
                        formats: [
                          "p",
                          "div",
                          "h1",
                          "h2",
                          "h3",
                          "h4",
                          "h5",
                          "h6",
                        ],
                        font: [
                          "Arial",
                          "Calibri",
                          "Comic Sans",
                          "Courier",
                          "Garamond",
                          "Georgia",
                          "Impact",
                          "Lucida Console",
                          "Palatino Linotype",
                          "Segoe UI",
                          "Tahoma",
                          "Times New Roman",
                          "Trebuchet MS",
                        ],
                      }}
                      onChange={handle}
                    />

                    <button className=" bg-blue-500 rounded-md px-4 py-2 text-white mt-5">
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
Edit.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default Edit;
