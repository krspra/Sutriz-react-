import React from "react";
import { LiaFlaskSolid } from "react-icons/lia";
import Index from "../../Subject/Index/Index";

const ChemistryIndex = () => {
  return (
    <Index
      Subject="Chemistry"
      Image={<LiaFlaskSolid style={{ color: "orange" }} />}
    />
  );

}

export default ChemistryIndex;
