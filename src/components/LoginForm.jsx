import React, { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firstDayTutoringTime, setFirstDayTutoringTime] = useState("");
  const [school, setSchool] = useState("");
  const [uniqueCode, setUniqueCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !firstDayTutoringTime || !school || !uniqueCode) {
      alert("Please fill out all fields before starting the quiz!");
      return;
    }
    if (uniqueCode !== "DZAFU" && uniqueCode !== "DSAMJ") {
      alert("Invalid Unique Code! Please try again.");
      return;
    }
    onSubmit({ name, email, firstDayTutoringTime, school, uniqueCode });
  };

  return (
    <div className="login-form-container">
      <h2>Login to Start the Quiz</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          First Day of Your Week Tutoring Time:
          <input
            type="time"
            value={firstDayTutoringTime}
            onChange={(e) => setFirstDayTutoringTime(e.target.value)}
            required
          />
        </label>
        <label>
          School:
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
        </label>
        <label>
          Unique Code:
          <input
            type="text"
            value={uniqueCode}
            onChange={(e) => setUniqueCode(e.target.value)}
            required
          />
        </label>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default LoginForm;
