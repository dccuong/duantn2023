import Head from "next/head";
import React, { ReactElement } from "react";
import ListUsers from "../../../component/admin/Users/ListUsers";
import { AdminLayout } from "../../../layouts";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <header className="z-10 fixed top-0 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
            Users
          </h5>
          <span>DS Users</span>
        </div>
      </header>
      <div className="p-6 mt-8 overflow-hidden">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <ListUsers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

index.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default index;
