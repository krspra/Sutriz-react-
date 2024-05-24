import React from "react";
import { useParams } from "react-router-dom";
import Chapter from "../../Subject/Chapter/Chapter";
import { Helmet } from "react-helmet";

const PhysicsChapter = () => {
  const { physicsChapter } = useParams();
  const physicsChapterWithoutDash = physicsChapter.replace(/-/g, " ");

  return (
    <>
      <Helmet>
        <title>{physicsChapterWithoutDash}</title>
      </Helmet>
      <Chapter Subject="Physics" Chapter={physicsChapter} />
    </>
  );
};

export default PhysicsChapter;
