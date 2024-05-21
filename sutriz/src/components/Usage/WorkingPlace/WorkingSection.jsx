import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const WorkingSection = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexShrink: "0",
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default WorkingSection;
