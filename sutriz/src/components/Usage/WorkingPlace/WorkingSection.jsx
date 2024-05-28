import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./WorkingSection.module.css"

const WorkingSection = () => {
  return (
    <>
      <Helmet>
        <title>Formulas Quiz-JEE & NEET</title>
      </Helmet>
      <div id={styles.container}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default WorkingSection;
