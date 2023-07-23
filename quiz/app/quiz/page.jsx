/** @format */
'use client';
import React, { useState } from 'react';
import { quiz } from '../data.js';

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log(true);
    } else {
      setSelectedAnswer(false);
      console.log(false);
    }
  };

  const nextQuestion = () => {
    console.log('next');
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 },
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResults(true);
    }
    setChecked(false);
  };

  return (
    <div className="container">
      <h1>Quiz Page</h1>

      <div>
        <h2>
          Question: {activeQuestion + 1} <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResults ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>

            {answers.map((answer, idx) => (
              <li
                onClick={() => onAnswerSelected(answer, idx)}
                key={idx}
                className={
                  selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className="btn">
                {activeQuestion === questions.length - 1 ? 'finish' : 'next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="btn-disabled">
                {activeQuestion === questions.length - 1 ? 'finish' : 'next'}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            <h3>Overall {(result.score / 25) * 100}</h3>
            <p>
              Total Questions <span>{questions.length}</span>
            </p>
            <p>
              {' '}
              <p>
                Total results <span>{result.score}</span>
              </p>
            </p>
            <p>
              correct answer <span>{result.correctAnswers}</span>
            </p>
            <p>
              wrong answer <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
