import React from "react";
import { LiaFlaskSolid } from "react-icons/lia";
import Index from "../../Subject/Index/Index";
import { Helmet } from "react-helmet";

const ChemistryIndex = () => {
  return (
    <>
      <Helmet>
        <title>Chemistry Formulas QUIZ</title>
      </Helmet>
      <Index
        Subject="Chemistry"
        Image={<LiaFlaskSolid style={{ color: "#008000b3" }} />}
      />
    </>
  );
};

export default ChemistryIndex;
