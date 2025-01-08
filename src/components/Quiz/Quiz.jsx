import React, { useState } from "react";
import "./Quiz.css";

const Quiz = ({ userInfo, questions }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[index].answer) {
      setScore(score + 1);
    }
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div className="container">
      <h1>Welcome to the Quiz</h1>
      {userInfo && (
        <div className="user-info">
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>First Day of Your Week Tutoring Time:</strong> {userInfo.firstDayTutoringTime}</p>
          <p><strong>School:</strong> {userInfo.school}</p>
        </div>
      )}
      {!isQuizFinished ? (
        <>
          <h2>
            {index + 1}. {questions[index].question}
          </h2>
          <ul>
            <li onClick={() => handleAnswer(questions[index].option1)}>{questions[index].option1}</li>
            <li onClick={() => handleAnswer(questions[index].option2)}>{questions[index].option2}</li>
            <li onClick={() => handleAnswer(questions[index].option3)}>{questions[index].option3}</li>
            <li onClick={() => handleAnswer(questions[index].option4)}>{questions[index].option4}</li>
          </ul>
        </>
      ) : (
        <div className="result">
          <h2>Quiz Finished!</h2>
          <p>Your score is {score} out of {questions.length}</p>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
