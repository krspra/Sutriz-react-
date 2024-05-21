import React from "react";
import styles from "./Sidebar.module.css";
import sutrizlogo from "../../../../assets/sutrizlogo.png";
import { IoBookmarksOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();

  return (
    <div id={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: "0",
        }}
      >
        <img id={styles.sutrizlogo} src={sutrizlogo} alt="Domwor" />
        <div
          style={{
            height: "40px",
            fontSize: "40px",
            lineHeight: "40px",
            textAlign: "center",
            width: "120px",
            color: "#FFD57F",
            fontWeight: "bold",
          }}
        >
          SUTRIZ
        </div>
      </div>

      <div style={{ height: "70vh", display: "flex", justifyContent: "space-between", flexDirection: "column", flexShrink: "0" }}>
        <ul id={styles.ulOne}>
          <button
            onClick={() => navigate("/usage/workingsection")}
            className={`${styles.things} ${path === "/usage/workingsection" ? styles.thingsOnActive : ""}`}
          >
            <FiHome /> Home
          </button>
          <button className={styles.things}>
            <IoBookmarksOutline /> Bookmarks
          </button>
          <button className={styles.things}>
            <MdOutlineSettingsSuggest /> Suggest Feature
          </button>
          <button className={styles.things}>
            <CgProfile /> Profile
          </button>
        </ul>

        <ul id={styles.ulTwo}>
          <button className={styles.things}>
            <MdDarkMode /> Switch to Dark
          </button>
          <button className={styles.things}>
            <RiLogoutCircleRLine /> Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
