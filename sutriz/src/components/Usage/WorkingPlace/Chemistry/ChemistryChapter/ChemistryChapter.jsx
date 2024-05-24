import React from "react";
import { useParams } from "react-router-dom";
import Chapter from "../../Subject/Chapter/Chapter";
import { Helmet } from "react-helmet";

const ChemistryChapter = () => {
  const { chemistryChapter } = useParams();
  const chemistryChapterWithoutDash = chemistryChapter.replace(/-/g, " ");

  return (
    <>
      <Helmet>
        <title>{chemistryChapterWithoutDash}</title>
      </Helmet>
      <Chapter Subject="Chemistry" Chapter={chemistryChapter} />
    </>
  );
};

export default ChemistryChapter;
