import React from "react";
import UsageHeader from "./UsageHeader/UsageHeader.jsx"
import QuizSection from "./QuizSection/QuizSection.jsx"

const MainView = () => {
  return (
    <div style={{height:"100%",width:"75%",flexShrink:"0"}}>
      <UsageHeader />
      <QuizSection />
    </div>
  );
};

export default MainView;
