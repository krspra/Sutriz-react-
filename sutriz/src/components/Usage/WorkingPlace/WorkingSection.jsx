import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./WorkingSection.module.css";

const WorkingSection = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <>
          <Helmet>
            <title>Formulas Quiz-JEE & NEET</title>
          </Helmet>
          <div id={styles.container}>
            <Sidebar />
            <Outlet />
          </div>
        </>
      ):<Navigate to="/"/>}
    </>
  );
};

export default WorkingSection;
