import React from "react";
import UsageHeader from "./UsageHeader/UsageHeader.jsx";
import QuizSection from "./QuizSection/QuizSection.jsx";
import sutrizLogo from "../../../.././assets/sutrizlogo.png";
import styles from "./MainView.module.css";
import { IoBookmarksOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";

const MainView = () => {
  return (
    <>
      <div style={{ height: "100%", width: "75%", flexShrink: "0" }}>
        <div id={styles.logoContForSmallSizeScreen}>
          <img style={{ height: "50px" }} src={sutrizLogo} alt="Sutriz Logo" />
          <div
            style={{
              height: "50px",
              width: "fitContent",
              lineHeight: "50px",
              fontSize: "40px",
              color: "#FFD57F",
              fontWeight: "bold",
            }}
          >
            SUTRIZ
          </div>
        </div>
        <UsageHeader />
        <QuizSection />
      </div>

      <div id={styles.usageBottomNav}>
      <FiHome/>
      <IoBookmarksOutline/>
      <CgProfile/>
      <MdOutlineSettingsSuggest/>
      </div>
    </>
  );
};

export default MainView;
