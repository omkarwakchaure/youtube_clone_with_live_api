import React from "react";
import Sidebar from "./layouts/Sidebar";
import { Outlet } from "react-router";
import Head from "./layouts/Head";

const Body = () => {
  return (
    <div className="flex flex-col">
      <Head />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
