import React from "react";
import styles from "./Sidebar.module.css";
import sutrizlogo from "../../../../assets/sutrizlogo.png";
import { IoBookmarksOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();

  return (
    <>
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
            className={styles.textSutriz}>
            SUTRIZ
          </div>
        </div>

        <div id={styles.innerContainer}>
          <ul id={styles.ulOne}>
            <button
              onClick={() => navigate("/usage/workingsection")}
              className={`${styles.things} ${
                path === "/usage/workingsection" ? styles.thingsOnActive : ""
              }`}
            >
              <FiHome /> Home
            </button>
            <button className={styles.things}>
              <IoBookmarksOutline /> <span>Bookmarks</span> 
            </button>
            <button className={styles.things}>
              <IoCodeSlashSharp /> <span>Suggest Feature</span> 
            </button>
            <button className={styles.things}>
              <CgProfile /> <span>Profile</span>
            </button>
          </ul>

          <ul id={styles.ulTwo}>
            <button className={styles.things}>
              <MdDarkMode /> <span>Switch to Dark</span> 
            </button>
            <button className={styles.things}>
              <RiLogoutCircleRLine /> <span>Logout</span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
