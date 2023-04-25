import React from "react";
import Link from "next/link";
import PrivateRoute from "../../component/PraviteRouter";
import SidebarProfile from "../../component/Sidebar";

type Props = {
  children: JSX.Element;
};

const ProfileLayout = ({ children }: Props) => {
  return (
    <PrivateRoute roleAccept={0}>
      <div className="container-base">
        <ul className="text-[#282828] flex flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left">
          <li className={`hover:text-[#FF5722]`}>
            <Link href=""> Trang chủ / </Link>
          </li>
          <li className="text-[#FF5722]">
            <Link href=""> Trang thông tin</Link>
          </li>
        </ul>
        <div className="mt-5 grid md:grid-cols-4 grid-cols-1 mb-10">
          <div className="">
           <SidebarProfile/>
          </div>
          <div className="md:col-span-3">{children}</div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default ProfileLayout;