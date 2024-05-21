import React from "react";
import { useParams } from "react-router-dom";
import Chapter from "../../Subject/Chapter/Chapter";

const ChemistryChapter = () => {
  const {chemistryChapter}=useParams()
  return(<Chapter Subject='Chemistry' Chapter={chemistryChapter}/>)
};

export default ChemistryChapter;
