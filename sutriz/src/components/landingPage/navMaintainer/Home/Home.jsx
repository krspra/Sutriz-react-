import React from "react";
import styles from "./Home.module.css";
import educatioImage from "./Online-Education.png";
import { MenuContext } from "../../../../Context";
import { useContext } from "react";
import Getstarted from "../../layout/Header/getstarted/Getstarted";

function Home() {
  // alert("If You're facing any of the UI based problem on our Site. We advise you to open our site in any of the CHROME, SAFARI, BRAVE, EDGE or OPERA browser.")
  const { checkbox,updateCheckStatus } = useContext(MenuContext);
  return (
    <div onClick={()=>{updateCheckStatus(false)}} className={checkbox?styles.homeBlurred:""} id={styles.Home}>

      <div id={styles.textBox}>
        One Stop Solution Of Formulas Revision.
        <div id={styles.smallSizeText}>
          Revise PCM formulas via <span style={{color:"red"}}>QUIZ FORMAT</span>. No more need of attempting long
          question just for revising Formulas.
        </div>
        <Getstarted></Getstarted>
      </div>
      <img id={styles.eduImg} src={educatioImage} />
    </div>
  );
}

export default Home;
