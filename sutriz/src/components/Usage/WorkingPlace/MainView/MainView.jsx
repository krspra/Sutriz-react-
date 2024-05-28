import React from "react";
import UsageHeader from "./UsageHeader/UsageHeader.jsx";
import QuizSection from "./QuizSection/QuizSection.jsx";
import sutrizLogo from "../../../.././assets/sutrizlogo.png";
import styles from "./MainView.module.css"

const MainView = () => {
  return (
    <div style={{ height: "100%", width: "75%", flexShrink: "0" }}>
      <div id={styles.logoContForSmallSizeScreen}>
        <img style={{ height: "50px" }} src={sutrizLogo} alt="Sutriz Logo" />
        <div
          style={{
            height: "50px",
            width:"fitContent",
            lineHeight: "50px",
            fontSize: "40px",
            color:"#FFD57F",
            fontWeight:"bold"
          }}
        >
          SUTRIZ
        </div>
      </div>
      <UsageHeader />
      <QuizSection />
    </div>
  );
};

export default MainView;
