import React from "react";
import { BsBank2 } from "react-icons/bs";

import "./Sidebar.css";
import Sidebarlink from "./Sidebarlink";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ isSidebaropen,setIsSidearopen }) => {
  return (
    <aside
      className={`w-65 min-w-65 h-screen text-white bg-[#03152B] flex flex-col overflow-y-auto gap-10
      fixed top-0 left-0 z-50 transition-transform duration-300
      ${isSidebaropen ? "translate-x-0" : "-translate-x-full"}
      lg:static lg:translate-x-0`}
    >

      <div className="h-20 flex items-center justify-around">
        <BsBank2 className="h-10 w-10 text-[#D4AF37]" />

        <h2 className="text-md leading-tight">
          Bank Mangement <br />
          system
        </h2>
        <button
  className="lg:hidden text-2xl"
  onClick={() => setIsSidearopen(false)}
>
  <RxCross2 />
</button>
      </div>

      <Sidebarlink />
    </aside>
  );
};

export default Sidebar;