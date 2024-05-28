import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Getstarted.module.css";

function Getstarted() {
  const navigate=useNavigate();
  return <div onClick={()=>{navigate("/usage/signup")}} className={styles.getStarted}>Get Started</div>;
}

export default Getstarted;
