// Usage.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const Usage = ({ title, user }) => {
  return (
    <>
    <Outlet/>
    </>
  );
};

export default Usage;
