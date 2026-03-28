import React from "react";
import SideBar from "../../components/layout/sidebar/SideBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      <SideBar />
      <div className="w-full flex flex-col py-6 sm:py-8 lg:py-10 gap-5 px-4 sm:px-6 lg:px-10">
        {children}
      </div>
    </div>
  );
}
