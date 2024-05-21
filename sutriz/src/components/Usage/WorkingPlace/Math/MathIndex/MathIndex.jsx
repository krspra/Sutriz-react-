import React, { useEffect, useState } from "react";
import styles from "./MathIndex.module.css";
import { PiMathOperationsBold } from "react-icons/pi";
import { db } from "../../../../../firebaseconfigfile";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

const MathIndex = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function getAllDocuments() {
      const ref = collection(db, "Math");
      const querySnapShot = await getDocs(ref);
      const allDocuments = querySnapShot.docs.map((doc) => doc.id); // Extract document IDs
      setDocuments(allDocuments); // Set state with all document IDs
    }

    getAllDocuments();
  }, []);

  return (
    <div id={styles.container}>
      <div
        id={styles.backButton}
        onClick={() => {
          navigate("/usage/workingsection");
        }}
      >
        <IoChevronBackSharp />
      </div>

      <div id={styles.innerContainer}>
        <div id={styles.mathBox}>
          <div
            style={{
              display: "flex",
              height: "50%",
              width: "100%",
              fontWeight: "bold",
              fontSize: "30px",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <PiMathOperationsBold style={{ color: "orange" }} /> Mathematics
          </div>
          <div
            style={{
              // border: "1px solid #DADAE4",
              height: "50%",
              width: "100%",
            }}
          ></div>
        </div>

        <div
          onClick={(event) => {
           const chapter= event.target.innerText;
           const chapterWithDash=chapter.replace(/ /g,'-');
           navigate(chapterWithDash);
          }}
          id={styles.chaptersContainingBox}
        >
          {documents.map((chapter) => (
            <div key={chapter} id={styles.chapter}>
              {chapter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MathIndex;
