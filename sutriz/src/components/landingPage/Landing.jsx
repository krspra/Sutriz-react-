import React from "react";
import Header from "./layout/Header/Header";
import { Outlet } from "react-router-dom";
import {Helmet} from "react-helmet"

function Landing({title}) {
  
  return (
    <>
      <Helmet>
        <title>Sutriz-One Stop Solution of Formulas Revision</title>
      </Helmet>
      <Header/>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </>
  );
}

export default Landing;
