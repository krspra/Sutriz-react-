import React from "react";
import Chapter from "../../Subject/Chapter/Chapter";
import { useParams } from "react-router-dom";

const MathChapter = () => {
  const {mathChapter}=useParams()
  return(<Chapter Subject='Math' Chapter={mathChapter}/>)
  
};

export default MathChapter;
