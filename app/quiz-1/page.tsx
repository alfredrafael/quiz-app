"use client";
import React, { useState } from "react";
import { quiz2 } from "../data.jsx";

const Quiz1 = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [correction, setCorrection] = useState(null);
  let [modalIsOpen, setModalIsOpen] = useState(false);

  const { questions } = quiz2;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      handleCorrectAnswer({ answer });
      setSelectedAnswer(true);
      console.log("true");
    } else {
      handleWrongAnswer({ answer });
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const handleCorrectAnswer = (e) => {
    let usersCorrectAnswer = e.answer;
    const questionObject = quiz2.questions.find(
      (q) => q.correctAnswer === usersCorrectAnswer
    );
    alert(
      `${usersCorrectAnswer} is correct because ${questionObject.replyToCorrectAnswer}. Feel free to click on the incorrect answers to learn more.`
    );
  };

  const handleWrongAnswer = (e) => {
    let usersIncorrectAnswer = e.answer;

    const questionObject = quiz2.questions.find((q) =>
      q.incorrectAnswers.includes(usersIncorrectAnswer)
    );

    const indexOfIncorrectAnswer =
      questionObject.incorrectAnswers.indexOf(usersIncorrectAnswer);

    const reply =
      questionObject.replyToIncorrectAnswers[indexOfIncorrectAnswer];
    console.log(`${usersIncorrectAnswer} is incorrect. ${reply}`);
    setCorrection(usersIncorrectAnswer + " is incorrect. " + reply);
    setModalIsOpen(true);
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
    setCorrection(null);
  };

  return (
    <div className="container flex">
      <div className="container">
        <h1>Second Quiz Page</h1>
        <div>
          <h2>
            Question: {activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
        </div>
        <div>
          {!showResult ? (
            <div className="quiz-container">
              <h3>{questions[activeQuestion].question}</h3>
              {answers.map((answer, idx) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={
                    selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                  }
                >
                  <span>{answer}</span>
                </li>
              ))}
              {checked ? (
                <button onClick={nextQuestion} className="btn">
                  {activeQuestion === question.length - 1 ? "Finish" : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="btn-disabled"
                >
                  {" "}
                  {activeQuestion === question.length - 1 ? "Finish" : "Next"}
                </button>
              )}
            </div>
          ) : (
            <div className="quiz-container">
              <h3>Results</h3>
              <h3>Overall {(result.score / 25) * 100}%</h3>
              <p>
                Total Questions: <span>{questions.length}</span>
              </p>
              <p>
                Total Score: <span>{result.score}</span>
              </p>
              <p>
                Correct Answers: <span>{result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers: <span>{result.wrongAnswers}</span>
              </p>
              <button onClick={() => window.location.reload()}>Restart</button>
            </div>
          )}
        </div>
      </div>
      <div className="border text-white">{correction}</div>
    </div>
  );
};

export default Quiz1;
