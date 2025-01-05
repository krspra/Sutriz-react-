import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Chapter.module.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { db } from "../../../../../firebaseconfigfile";
import { doc, getDoc } from "firebase/firestore";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import mathJaxConfig from "../../../../../mathjax-config";
import { toast, Bounce } from "react-toastify";

const Chapter = ({Subject,Chapter}) => {
  const [questionData, setQuestionData] = useState(null);
  const [choosenOption, setChoosenOption] = useState(null);
  const [currentQuestion, setcurrentQuestion] = useState(1);
  const [prevQuestionExists, setPrevQuestionExists] = useState(false);
  const [nextQuestionExists, setNextQuestionExists] = useState(false);

  const navigate = useNavigate();
  const chapterWithSpace = Chapter.replace(/-/g, " ");

  const getFieldFromDocument = useCallback(
    async (collectionName, documentId, fieldName) => {
      try {
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data && fieldName in data) {
            return data[fieldName];
          } else {
            return null;
          }
        } else {
          navigate("/pagenotfound");
        }
      } catch (error) {
        alert("Error getting document:", error);
        return null;
      }
    },
    [navigate]
  );

  useEffect(() => {
    getFieldFromDocument(
      Subject,
      chapterWithSpace,
      `que${currentQuestion}`
    ).then((fieldValue) => {
      if (fieldValue) {
        setQuestionData(fieldValue);
      } else {
        setQuestionData(null);
      }
    });

    getFieldFromDocument(
      Subject,
      chapterWithSpace,
      `que${currentQuestion - 1}`
    ).then((fieldValue) => {
      setPrevQuestionExists(!!fieldValue);
    });

    getFieldFromDocument(
      Subject,
      chapterWithSpace,
      `que${currentQuestion + 1}`
    ).then((fieldValue) => {
      setNextQuestionExists(!!fieldValue);
    });
  }, [currentQuestion, getFieldFromDocument,chapterWithSpace]);

  const checkAnswer = useCallback(() => {
    if (choosenOption) {
      if (choosenOption === questionData.correct) {
        toast.success("Congrats! It's a correct.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        toast.error("Oh no! It's a wrong.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
      setChoosenOption(null);
    }
  }, [choosenOption, questionData]);

  const handleNavigation = useCallback(
    (direction) => {
      setChoosenOption(null);

      const nextQuestion = currentQuestion + direction;
      getFieldFromDocument(
        Subject,
        chapterWithSpace,
        `que${nextQuestion}`
      ).then((fieldValue) => {
        if (fieldValue !== null) {
          setcurrentQuestion(nextQuestion);
        }
      });
    },
    [currentQuestion, getFieldFromDocument, chapterWithSpace]
  );

  return (
    <div id={styles.container}>
      <div
        id={styles.backButton}
        onClick={() => navigate(`/usage/workingsection/${Subject}`)}
      >
        <GrFormPrevious />
      </div>

      <MathJaxContext config={mathJaxConfig}>
        <div id={styles.innerContainer}>
          {questionData ? (
            <>
              <div
                style={{
                  color: "orange",
                  height: "8%",
                  width: "100%",
                  flexShrink: "0",
                }}
              >
                {`${Subject} > ${chapterWithSpace}`}
              </div>

              <div
                style={{
                  height: "92%",
                  width: "100%",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap:"10px"
                }}
              >
                <div
                  style={{ color: "#000000a0", height: "25px" }}
                >{`Question${currentQuestion}`}</div>
                <div id={styles.question}
                >
                  {questionData.imageSrc?<img style={{height:"80px",width:"200px"}} src={questionData.imageSrc}/>:""}
                  <MathJax dynamic>{questionData.Question}</MathJax>
                </div>
                <div
                  style={{
                    height: "280px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    flexShrink: "0",
                  }}
                >
                  {["A", "B", "C", "D"].map((option, index) => (
                    <div
                      key={option}
                      onClick={() => setChoosenOption(option)}
                      className={`${styles.option} ${
                        choosenOption === option ? styles.choosenOption : ""
                      }`}
                    >
                      <div
                        className={`${styles.optionNameDiv} ${
                          choosenOption === option
                            ? styles.choosenOptionNameDiv
                            : ""
                        }`}
                      >
                        {option}
                      </div>
                      <MathJax id={styles.choiceData} dynamic>
                        {questionData[`opt${index + 1}`]}
                      </MathJax>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    border: "1px solid #DADAE4",
                    minHeight: "65px",
                    width: "99.5%",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    fontSize: "18px",
                  }}
                >
                  <div
                    className={`${styles.nextOrPreviousButton} ${
                      prevQuestionExists
                        ? styles.nextOrPreviousButtonOnActive
                        : styles.nextOrPreviousButtonOnUnActive
                    }`}
                    onClick={() => handleNavigation(-1)}
                  >
                    <GrFormPrevious />
                  </div>
                  <div
                    onClick={checkAnswer}
                    id={
                      choosenOption
                        ? styles.checkOptionUpdated
                        : styles.checkOption
                    }
                  >
                    Check Option
                  </div>
                  <div
                    className={`${styles.nextOrPreviousButton} ${
                      nextQuestionExists
                        ? styles.nextOrPreviousButtonOnActive
                        : styles.nextOrPreviousButtonOnUnActive
                    }`}
                    onClick={() => handleNavigation(1)}
                  >
                    <MdNavigateNext />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </MathJaxContext>
    </div>
  );
};

export default Chapter;
