import React from "react";
import { PiMathOperationsBold } from "react-icons/pi";
import Index from "../../Subject/Index/Index";
import { Helmet } from "react-helmet";

const MathIndex = () => {
  return (
    <>
      <Helmet><title>Math Formulas QUIZ</title></Helmet> 
      <Index
        Subject="Math"
        Image={<PiMathOperationsBold style={{ color: "orange" }} />}
      />
    </>
  );
};

export default MathIndex;
