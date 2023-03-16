import React from "react";
import ClientFooter from "./Footer";
import ClientHeader from "./Header";

type ClientLayoutProps = {
  children: JSX.Element;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <div className="font-quicksand  ">
      <header className=" sticky top-0 w-full shadow-lg  pt-3  z-20 bg-white">
        <ClientHeader />
      </header>
      <main className="pb-6 my-0 mx-10">{children}</main>
      <footer>
        {" "}
        <ClientFooter />
      </footer>
    </div>
  );
};

export default ClientLayout;
