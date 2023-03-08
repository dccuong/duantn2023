import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import PrivateRoute from "../../component/Privaterouter";
import { Tuser } from "../../models/user";
import { logout } from "../../redux/auth";
import { RootState } from "../../redux/store";

import AdminMenu from "./Sidebar";

type AdminLayoutProps = {
  children: JSX.Element;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  // const currentUser = useSelector(
  //   (state: RootState) => state.auth.currentUser
  // ) as User;
  // const dispatch = useDispatch();

  // const handleSignout = () => {
  //   dispatch(logout());
  //   toast.success("Đăng xuất thành công");
  // };

  return (
    // <PrivateRoute>
      <div>
        <section className="min-h-[calc(100vh-98px)] dashboard">
          <AdminMenu />
          <main className="ml-0 transition md:ml-60">{children}</main>
          <div className="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 hidden dashboard__overlay" />
        </section>
      </div>
    // </PrivateRoute>
  );
};

export default AdminLayout;
