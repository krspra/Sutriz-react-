import React from "react";
import styles from "./Header.module.css";
import sutrizlogo from "../../../../assets/sutrizlogo.png";
import { Link } from "react-router-dom";
import Getstarted from "./getstarted/Getstarted";

const Header = () => {
  return (
    <nav
      style={{
        height: "15vh",
        width: "90vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: "0",
      }}
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
          <img
            style={{ height: "60px", width: "60px" }}
            src={sutrizlogo}
            alt="sutrizlogo"
          />
          <div
            style={{
              height: "60px",
              fontSize: "40px",
              lineHeight: "60px",
              textAlign: "center",
              width: "120px",
              color: "#FFD57F",
              fontWeight:"bold"
            }}
          >
            SUTRIZ
          </div>
        </div>

        <ul style={{ listStyleType: "none", display: "flex", gap: "40px" }}>
          <Link>Home</Link>
          <Link>Guide</Link>
          <Link>Suggest a feature</Link>
          <Link>About us</Link>
        </ul>
        <div
          style={{
            gap: "20px",
            display: "flex",
            borderLeft: "2px solid #00000038",
            paddingLeft: "15px",
          }}
        >
          <Link id={styles.logIn}>Login</Link>
          <Getstarted></Getstarted>
        </div>
      </div>
    </nav>
  );
};

export default Header;
