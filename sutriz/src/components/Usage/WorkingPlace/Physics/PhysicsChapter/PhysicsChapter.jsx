import React from "react";
import { useParams } from "react-router-dom";
import Chapter from "../../Subject/Chapter/Chapter";

const PhysicsChapter = () => {
  const {physicsChapter}=useParams()
  return(<Chapter Subject='Physics' Chapter={physicsChapter}/>)
};

export default PhysicsChapter;
