import React from "react";
import Chapter from "../../Subject/Chapter/Chapter";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const MathChapter = () => {
  const { mathChapter } = useParams();
  const mathChapterWithoutDash = mathChapter.replace(/-/g, " ");

  return (
    <>
    <Helmet><title>{mathChapterWithoutDash}</title></Helmet>
    <Chapter Subject="Math" Chapter={mathChapter} />
    </>
  );
};

export default MathChapter;
