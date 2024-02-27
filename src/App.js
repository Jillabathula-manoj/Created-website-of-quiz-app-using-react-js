import React, { useState } from 'react';
import './App.css';

const quizData = [
  {
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Tool Markup Language'],
    correctAnswer: 'Hyper Text Markup Language'
  },
  {
    question: 'What does CSS stand for?',
    options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
    correctAnswer: 'Cascading Style Sheets'
  },
  {
    question: 'Which of the following is not a JavaScript data type?',
    options: ['Undefined', 'Number', 'Boolean', 'Float'],
    correctAnswer: 'Float'
  },
  {
    question: 'Which HTML tag is used to define an internal style sheet?',
    options: ['<style>', '<script>', '<headStyle>', '<css>'],
    correctAnswer: '<style>'
  },
  {
    question: 'What is the correct CSS syntax for making all the <p> elements bold?',
    options: ['p {font-weight:bold;}', 'p {text-size:bold;}', 'p {font:bold;}', 'p {bold:yes;}'],
    correctAnswer: 'p {font-weight:bold;}'
  },
  {
    question: 'Which of the following is not a valid JavaScript variable name?',
    options: ['2myVar', '_myVar', 'myVar2', '$myVar'],
    correctAnswer: '2myVar'
  },
  {
    question: 'What is the correct SQL syntax to select all the columns from a table named "Customers"?',
    options: ['SELECT * FROM Customers', 'SELECT COLUMN * FROM Customers', 'SELECT ALL FROM Customers', 'SELECT COLUMNS * FROM Customers'],
    correctAnswer: 'SELECT * FROM Customers'
  },
  {
    question: 'Which property is used to change the background color?',
    options: ['bgcolor', 'background-color', 'color', 'background'],
    correctAnswer: 'background-color'
  },
  {
    question: 'What is the correct way to write a JavaScript array?',
    options: ['var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]', 'var colors = {"red", "green", "blue"}'],
    correctAnswer: 'var colors = ["red", "green", "blue"]'
  },
  {
    question: 'Which SQL keyword is used to sort the result-set?',
    options: ['SORT', 'ORDER', 'SORT BY', 'ORDER BY'],
    correctAnswer: 'ORDER BY'
  }
  // Add more questions as needed
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="quiz-score">
          <h2>Your Score: {score} out of {quizData.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{quizData.length}
          </div>
          <div className="question-text">{quizData[currentQuestion].question}</div>
          <div className="answer-options">
            {quizData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
