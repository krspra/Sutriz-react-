import React from "react";
import styles from "./Home.module.css";
import educatioImage from "./Online-Education.png";

function Home() {
  return (
    <div id={styles.Home}>
      <div id={styles.textBox}>
        One Stop Solution Of Formulas Revision.
        <div style={{ fontSize: "20px" }}>
          Revise PCM formulas via <span style={{color:"red"}}>QUIZ FORMAT</span>. No more need of attempting long
          question just for revising Formulas.
        </div>
      </div>
      <img src={educatioImage} />
    </div>
  );
}

export default Home;
