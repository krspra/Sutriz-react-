import React from "react";
import { GrReactjs } from "react-icons/gr";
import Index from "../../Subject/Index/Index";
import { Helmet } from "react-helmet";

const PhysicsIndex = () => {
  return (
    <>
      <Helmet><title>Physics Formulas QUIZ</title></Helmet>
      <Index
        Subject="Physics"
        Image={<GrReactjs style={{ color: "orange" }} />}
      />
    </>
  );
};

export default PhysicsIndex;
