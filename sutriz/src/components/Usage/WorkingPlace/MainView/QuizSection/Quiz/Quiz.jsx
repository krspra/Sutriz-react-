import React from "react";
import styles from "./Quiz.module.css";
import { Link } from "react-router-dom";
import { LiaFlaskSolid } from "react-icons/lia";
import { PiMathOperationsBold } from "react-icons/pi";
import { GrReactjs } from "react-icons/gr";

const Quiz = () => {
  const typeOfQuiz = [
    {
      subject: "Math",
      img: (
        <PiMathOperationsBold
          style={{ color: "#0000ffb0", fontSize: "40px" }}
        />
      ),
      backgroundColor: "#0000ffb0",
    },
    {
      subject: "Physics",
      img: <GrReactjs style={{ color: "red", fontSize: "40px" }} />,
      backgroundColor: "red",
    },
    {
      subject: "Chemistry",
      img: <LiaFlaskSolid style={{ color: "#008000b3", fontSize: "40px" }} />,
      backgroundColor: "#008000b3",
    },
  ];

  return typeOfQuiz.map((item, index) => (
    <Link
      to={"/usage/workingsection/" + item.subject}
      key={index}
      id={styles.box}
    >
      <div
        style={{
          height: "60px",
          width: "60px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {item.img}
      </div>

      <div
        style={{
          height: "40px",
          position: "relative",
          top: "15px",
          textAlign: "center",
          fontSize: "20px",
          lineHeight:"40px",
          color: "#00000090",
        }}
      >
        {item.subject}
      </div>
    </Link>
  ));
};

export default Quiz;
