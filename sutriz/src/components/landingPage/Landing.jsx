import React from "react";
import Header from "./layout/Header/Header";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

function Landing() {
  alert("Currently the app is under development. For accessing the available features please click on GET STARTED and then Continue with your GOOGLE SIGNUP"
  )
  return (
    <>
        <Helmet>
          <title>Sutriz-One Stop Solution of Formulas Revision</title>
        </Helmet>
        <Header />
        <Outlet></Outlet>
        {/* <Footer></Footer> */}

    </>
  );
}

export default Landing;
