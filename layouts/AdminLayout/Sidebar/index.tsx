import {
  faSignOutAlt,
  faComment,
  faCircleUser,
  faNewspaper,
  faSlidersH,
  faHospitalAlt,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth";
import { toast } from "react-toastify";
// import { logouttt } from "../../../Api/auth";
import { useRouter } from "next/router";

type Props = {};

const AdminMenu = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const handleSignout = () => {
    (async () => {
      // await logouttt();
      dispatch(logout());
      toast.success("Đăng xuất thành công");
    })();
  };
  return (
    <nav className="dashboard__sidebar fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-gray-900 w-60 md:translate-x-0 -translate-x-full">
      <Link href="/">
        <span className="flex items-center p-4 text-white font-bold text-3xl cursor-pointer">
          Trip finder
        </span>
      </Link>
      <nav
        className="text-sm font-medium text-gray-500"
        aria-label="Main Navigation"
      >
        <Link href="/admin">
          <span className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <svg
              className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentcolor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414.0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Dashboard</span>
          </span>
        </Link>

        <Link href="/admin/products">
          <span
            className={
              router.asPath == "/admin/products"
                ? "active flex items-center justify-between px-4 py-3 transition cursor-pointer group bg-gray-800 text-gray-200  "
                : " flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 "
            }
          >
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faHospitalAlt} />
              </div>
              <span>
                <b>Quản Lý Sản Phẩm</b>
              </span>
            </div>
          </span>
        </Link>

        <Link href="/admin/users">
          <span
            className={
              router.asPath == "/admin/users"
                ? "active flex items-center justify-between px-4 py-3 transition cursor-pointer group bg-gray-800 text-gray-200  "
                : " flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 "
            }
          >
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faCircleUser} />
              </div>
              <span>
                <b>Quản Lý Người Dùng</b>
              </span>
            </div>
          </span>
        </Link>

        <Link href="/admin/blogs">
          <span
            className={
              router.asPath == "/admin/blogs"
                ? "active flex items-center justify-between px-4 py-3 transition cursor-pointer group bg-gray-800 text-gray-200  "
                : " flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 "
            }
          >
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faNewspaper} />
              </div>
              <span>
                <b>Quản Lý Blog</b>
              </span>
            </div>
          </span>
        </Link>

        <Link href="/admin/sliders">
        <span
            className={
              router.asPath == "/admin/sliders"
                ? "active flex items-center justify-between px-4 py-3 transition cursor-pointer group bg-gray-800 text-gray-200  "
                : " flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 "
            }
          >            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faSlidersH} />
              </div>
              <span>
                <b>Quản Lý Sliders</b>
              </span>
            </div>
          </span>
        </Link>

        <Link href="/admin/tours">
          <span
            className={
              router.asPath == "/admin/tours"
                ? "active flex items-center justify-between px-4 py-3 transition cursor-pointer group bg-gray-800 text-gray-200  "
                : " flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 "
            }
          >
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faThList} />
              </div>
              <span>
                <b>Quản Lý ...</b>
              </span>
            </div>
          </span>
        </Link>
        <Link href="/admin/danhmuc">
          <span
            className={
              router.asPath == "/admin/danhmuc"
                ? "active flex items-center justify-between px-4 py-3 transition cursor-pointer group bg-gray-800 text-gray-200  "
                : " flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 "
            }
          >
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faComment} />
              </div>
              <span>
                <b>Quản lý Danh muc</b>
              </span>
            </div>
          </span>
        </Link>
        {/* <Link href="">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faThList} />
              </div>
              <span>Size</span>
            </div>
          </span>
        </Link>
        <Link href="">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faThList} />
              </div>
              <span>Toppings</span>
            </div>
          </span>
        </Link>
        <Link href="">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <span>Voucher</span>
            </div>
          </span>
        </Link>
        <Link href="">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faStore} />
              </div>
              <span>Store</span>
            </div>
          </span>
        </Link> */}

        <Link href="/admin/bookings">
          <span
            className={
              router.asPath == "/admin/bookings"
                ? "active flex items-center justify-between px-4 py-3 transition cursor-pointer group bg-gray-800 text-gray-200  "
                : " flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 "
            }
          >
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faComment} />
              </div>
              <span>
                <b>Quản lý Booking</b>
              </span>
            </div>
          </span>
        </Link>
      </nav>
      <button
        className="py-2 w-full text-white font-bold text-md cursor-pointer fixed bottom-0 border-solid border-t-2 border-b-2 border-sky-500"
        onClick={handleSignout}
      >
        <FontAwesomeIcon icon={faSignOutAlt} /> Log-out
      </button>
    </nav>
  );
};

export default AdminMenu;
