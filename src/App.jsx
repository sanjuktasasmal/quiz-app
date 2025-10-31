import React, { useState } from "react";
import "./App.css";

const questions = [
  { question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Multi Language"], answer: "Hyper Text Markup Language" },
  { question: "Which language is used for styling web pages?", options: ["HTML", "CSS", "Python", "Java"], answer: "CSS" },
  { question: "Which of these is a JavaScript framework?", options: ["React", "Laravel", "Django", "Flask"], answer: "React" },
  { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Syntax", "Creative Style System", "Computer Style Sheet"], answer: "Cascading Style Sheets" },
  { question: "Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<link>", "<h>", "<p>"], answer: "<a>" },
  { question: "Which company developed React?", options: ["Google", "Facebook", "Microsoft", "Amazon"], answer: "Facebook" },
  { question: "Which symbol is used for comments in CSS?", options: ["//", "#", "/* */", "<!-- -->"], answer: "/* */" },
  { question: "Which keyword declares a constant in JavaScript?", options: ["var", "let", "const", "constant"], answer: "const" },
  { question: "Which HTML element is used for the largest heading?", options: ["<h1>", "<h6>", "<heading>", "<head>"], answer: "<h1>" },
  { question: "In React, data is passed from parent to child via?", options: ["props", "state", "context", "ref"], answer: "props" },
  { question: "Which hook is used to manage state in React?", options: ["useEffect", "useRef", "useState", "useMemo"], answer: "useState" },
  { question: "Which CSS property changes the text color?", options: ["background-color", "color", "font-style", "text-align"], answer: "color" },
  { question: "Which of the following is a backend language?", options: ["HTML", "Python", "CSS", "React"], answer: "Python" },
  { question: "Which HTML tag is used to display images?", options: ["<img>", "<image>", "<src>", "<pic>"], answer: "<img>" },
  { question: "Which company developed JavaScript?", options: ["Netscape", "Microsoft", "Oracle", "Google"], answer: "Netscape" },
  { question: "Which of these is not a programming language?", options: ["Python", "HTML", "Java", "C++"], answer: "HTML" },
  { question: "Which tag is used to create a line break in HTML?", options: ["<lb>", "<br>", "<break>", "<b>"], answer: "<br>" },
  { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Program Integration", "Application Process Interaction", "Automated Programming Input"], answer: "Application Programming Interface" },
  { question: "Which tag is used for unordered lists in HTML?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: "<ul>" },
  { question: "What is the full form of URL?", options: ["Uniform Resource Locator", "Universal Record Locator", "Unified Response Link", "Uniform Record Locator"], answer: "Uniform Resource Locator" },
];

const App = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [current]: option });
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrent(0);
    setShowResult(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    return score;
  };

  return (
    <div className="quiz-container">
      <h1> React Quiz App</h1>

      {showResult ? (
        <div className="result-box">
          <h2>🎉 Quiz Completed!</h2>
          <p>
            Your Score: <strong>{calculateScore()}</strong> / {questions.length}
          </p>
          <p>
            {calculateScore() >= 15
              ? "🌟 Excellent!"
              : calculateScore() >= 10
              ? "😊 Good Job!"
              : "😅 Keep Practicing!"}
          </p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-box">
          <h3>
            Question {current + 1} / {questions.length}
          </h3>
          <p className="question">{questions[current].question}</p>

          <div className="options">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={answers[current] === option ? "selected" : ""}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="nav-buttons">
            <button onClick={prevQuestion} disabled={current === 0}>
              ⬅ Previous
            </button>
            <button onClick={nextQuestion}>
              {current === questions.length - 1 ? "Finish ➡" : "Next ➡"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
