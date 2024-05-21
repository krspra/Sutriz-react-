import React from 'react'
import styles from "./QuizSection.module.css"
import Quiz from './Quiz/Quiz'

const QuizSection = () => {

  return (
    <div id={styles.container}>
        <Quiz/>
    </div>
  );
}

export default QuizSection