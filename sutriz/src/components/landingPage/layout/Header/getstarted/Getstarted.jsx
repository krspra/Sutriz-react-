import React from "react";
import { Link } from "react-router-dom";
import styles from "./Getstarted.module.css";

function Getstarted() {
  return <Link className={styles.getStarted} to="/Usage/Signup">Get Started</Link>;
}

export default Getstarted;
