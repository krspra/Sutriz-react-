import React from "react";
import FZFimage from "./FZFerror.svg";
import { Link } from "react-router-dom";

const FZFerror = () => {
  return (
    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
      <h1 style={{ color: "#FFBC5E",textAlign:"center"}}>PAGE NOT FOUND</h1>
      <img style={{height:"300px"}}
        src={FZFimage}
        alt="PAGE NOT FOUND....Please Check The Url You Entered"
      />
      <h3 style={{textAlign:"center"}}>The Page you are looking for doesn't exist or an other error occured.
        Go back to <Link style={{fontSize:"32px"}} to="/">Home</Link> to choose a new direction. 
      </h3>
    </div>
  );
};

export default FZFerror;
