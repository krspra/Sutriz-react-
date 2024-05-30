import React from "react";
import styles from "./Header.module.css";
import sutrizlogo from "../../../../assets/sutrizlogo.png";
import { Link } from "react-router-dom";
import Getstarted from "./getstarted/Getstarted";
import { MdMenu } from "react-icons/md";
import { MdOutlineLiveHelp } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../../../../Context";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const { checkbox, updateCheckStatus } = useContext(MenuContext);

  return (
    <>
      {/* small screen menu code */}
      <div
        id={checkbox ? styles.smallScreenMenu : styles.smallScreenmenuNotActive}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
          }}
        >
          <img id={styles.sutrizlogo} src={sutrizlogo} alt="Domwor" />
          <div id={styles.sutrizLogoText}>SUTRIZ</div>
        </div>

        <ul id={styles.ulOne}>
          <button
            onClick={() => {
              navigate("/");
              updateCheckStatus(false);
            }}
            className={`${styles.things} ${
              path === "/" ? styles.thingsOnActive : ""
            }`}
          >
            <FiHome /> Home
          </button>
          <button className={styles.things}>
            <MdOutlineLiveHelp /> Guide
          </button>
          <button className={styles.things}>
            <MdOutlineSettingsSuggest /> Suggest a Feature
          </button>
          <button className={styles.things}>
            <BsFillInfoCircleFill /> About us
          </button>
        </ul>

        <div
          style={{
            gap: "20px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link id={styles.logInForMenu}>Login</Link>
          <Getstarted></Getstarted>
        </div>
      </div>
      {/* small screen menu code */}

      <nav id={styles.navDiv}
      >
        <div
          style={{
            height: "50px",
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <img id={styles.sutrizlogo} src={sutrizlogo} alt="sutrizlogo" />
            <div id={styles.sutrizLogoText}>SUTRIZ</div>
          </div>

          <ul id={styles.menu}>
            <Link className={styles.navOption}>Home</Link>
            <Link className={styles.navOption}>Guide</Link>
            <Link className={styles.navOption}>Suggest a feature</Link>
            <Link className={styles.navOption}>About us</Link>
          </ul>
          <div
            style={{
              gap: "20px",
              display: "flex",
              paddingLeft: "15px",
            }}
          >
            <span id={styles.authNav}>
              <Link id={styles.logIn}>Login</Link>
              <Getstarted></Getstarted>
            </span>

            <input
              style={{ display: "none" }}
              id="menu"
              type="checkbox"
              onChange={() => {
                updateCheckStatus(!checkbox);
              }}
            />
            <label
              id={styles.menuButton}
              style={{ fontSize: "35px", cursor: "pointer" }}
              htmlFor="menu"
            >
              {checkbox ? <IoMdClose /> : <MdMenu />}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
