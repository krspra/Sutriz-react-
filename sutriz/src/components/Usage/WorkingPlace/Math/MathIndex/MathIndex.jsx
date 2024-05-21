import React from "react";
import { PiMathOperationsBold } from "react-icons/pi";
import Index from "../../Subject/Index/Index";

const MathIndex = () => {
  return (
    <Index
      Subject="Math"
      Image={<PiMathOperationsBold style={{ color: "orange" }} />}
    />
  );
};

export default MathIndex;
