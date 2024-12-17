import React from "react";
import Header from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex overflow-hidden flex-col bg-stale-100">
      <Header />

      <div className="flex max-md:flex-col">
        <AdminSidebar />

        <main className="bg-[#F5F6FA] flex flex-col p-8 w-full max-md:ml-0 max-md:w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
