import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Quiz from "./components/Quiz/Quiz";
import { elaQuestions, mathQuestions } from "./assets/data";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [questions, setQuestions] = useState([]);

  const handleLoginSubmit = (data) => {
    setUserInfo(data);

    // Determine question set based on the unique code
    if (data.uniqueCode === "DZAFU") {
      setQuestions(elaQuestions); // ELA Questions
    } else if (data.uniqueCode === "DSAMJ") {
      setQuestions(mathQuestions); // Math Questions
    }
  };

  return (
    <div>
      {!userInfo ? (
        <LoginForm onSubmit={handleLoginSubmit} />
      ) : (
        <Quiz userInfo={userInfo} questions={questions} />
      )}
    </div>
  );
};

export default App;


