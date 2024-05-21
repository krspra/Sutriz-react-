import React from "react";
import Math from "./math.png";
import Physics from "./physics.png";
import Chemistry from "./chemistry.png";
import styles from "./Quiz.module.css";
import { Link } from "react-router-dom";

const Quiz = () => {
  const typeOfQuiz = [
    { subject: "Math", imgUrl: Math },
    { subject: "Physics", imgUrl: Physics },
    { subject: "Chemistry", imgUrl: Chemistry },
  ];

  return typeOfQuiz.map((item, index) => (
    <Link to={'/usage/workingsection/'+item.subject}
      key={index}
      id={styles.box}
    >
      <div
        style={{
          height: "50%",
          width: "90%",
          backgroundColor: "#FFD57F",
          borderRadius: "8px",
          position: "relative",
          top: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border:"1px solid #dadae4",
          flexWrap:"wrap"
        }}
      >
        <img id={styles.subjectImg} src={item.imgUrl} alt={item.subject} />
      </div>

      <div
        style={{
          height: "40%",
          width: "90%",
          position: "relative",
          top: "15px",
          textAlign: "center",
          fontSize:"20px",
          color:"#00000090",
        }}
      >
        {item.subject}
      </div>
    </Link>
  ));
};

export default Quiz;
