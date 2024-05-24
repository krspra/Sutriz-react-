import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const WorkingSection = () => {
  return (
    <>
      <Helmet>
        <title>Formulas Quiz-JEE & NEET</title>
      </Helmet>
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
    </>
  );
};

export default WorkingSection;
