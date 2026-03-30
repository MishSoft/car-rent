import React from "react";
import SideBar from "../components/layout/sidebar/SideBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main >
      {children}
    </main>
  );
}
