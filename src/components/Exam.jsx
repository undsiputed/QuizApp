import React, { useState, useEffect } from 'react';

const Exam = () => {
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60 + 25 * 60); // 2 hours 25 minutes
  const [isExamFinished, setIsExamFinished] = useState(false);

  const startExam = () => {
    setIsExamStarted(true);
    window.open('/sat-practice-test-1-digital.pdf', '_blank');
  };

  const finishExam = () => {
    setIsExamStarted(false);
    setIsExamFinished(true);
  };

  useEffect(() => {
    let timer;
    if (isExamStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isExamStarted) {
      finishExam();
    }
    return () => clearInterval(timer);
  }, [isExamStarted, timeLeft]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container">
      <h1>SAT Exam</h1>
      {!isExamStarted && !isExamFinished && (
        <button onClick={startExam} className="start-button">
          Start Exam
        </button>
      )}
      {isExamStarted && (
        <div>
          <h2>Time Left: {formatTime(timeLeft)}</h2>
          <button onClick={finishExam} className="finish-button">
            Finish Exam
          </button>
        </div>
      )}
      {isExamFinished && (
        <div>
          <h2>Exam Finished</h2>
          <button
            onClick={() => {
              window.open('/sat-practice-test-1-answers-digital.pdf', '_blank');
            }}
            className="answers-button"
          >
            Show Answers
          </button>
        </div>
      )}
    </div>
  );
};

export default Exam;
