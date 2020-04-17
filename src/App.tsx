import React, { useState } from "react";
import "./App.css";

type Answer = "yes" | "no";

const App: React.FC = () => {
  const [answerOne, setAnswerOne] = useState<Answer | undefined>(undefined);
  const [answerTwo, setAnswerTwo] = useState<Answer | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const isSlav: boolean = answerOne === "yes" && answerTwo === "yes";

  const handleQuestionOne = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const { value } = event.currentTarget;
    if (answerOne != value) setAnswerOne(value as Answer);
  };

  const handleQuestionTwo = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const { value } = event.currentTarget;
    if (answerTwo != value) setAnswerTwo(value as Answer);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  const handleReset = () => {
    setIsSubmitting(false);
    setAnswerOne(undefined);
    setAnswerTwo(undefined);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Slav</p>
      </header>
      <div className="App-body">
        {isSubmitting ? (
          <>
            <p>You are{!isSlav && " not"} slav.</p>
            {isSlav && (
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/nraKxjjY2Ks"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <div className="button-container">
              <button onClick={handleReset}>Try Again!</button>
            </div>
          </>
        ) : (
          <>
            <p>1. Do you like to drink kvass and listen to hardbass?</p>
            <div>
              <input
                type="radio"
                id="yes-1"
                name="answer-1"
                className="radio-input"
                value="yes"
                onClick={handleQuestionOne}
              />
              <label htmlFor="yes-1">Yes</label>
              <input
                type="radio"
                id="no-1"
                name="answer-1"
                className="radio-input"
                value="no"
                onClick={handleQuestionOne}
              />
              <label htmlFor="no-1">No</label>
            </div>
            <p>2. Do you often squat and wear Adidas?</p>
            <div>
              <input
                type="radio"
                id="yes-2"
                name="answer-2"
                className="radio-input"
                value="yes"
                onClick={handleQuestionTwo}
              />
              <label htmlFor="yes-2">Yes</label>
              <input
                type="radio"
                id="no-2"
                name="answer-2"
                className="radio-input"
                value="no"
                onClick={handleQuestionTwo}
              />
              <label htmlFor="no-2">No</label>
            </div>
            <div className="button-container">
              <button
                onClick={handleSubmit}
                disabled={!answerOne || !answerTwo}
              >
                Check if you are slav
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
