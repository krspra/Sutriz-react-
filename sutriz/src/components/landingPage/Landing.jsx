import React from "react";
import { useEffect } from "react";
import Header from "./layout/Header/Header";
import { Outlet } from "react-router-dom";

function Landing({title}) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Header/>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </>
  );
}

export default Landing;
