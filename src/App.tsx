import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';

import QuestionCard from './components/QuestionCard';

import { Difficulty } from './API';

const TOTAL_QUESTIONS = 10;


function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnsers] = useState([]);
  const [score, seetScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startQuiz = async () => {}
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}
  
  const nextQuestion = () => {}

  return (
    <div className="App">
      <h1>React-Typescript Quiz</h1>
      <button className="start" onClick={startQuiz}>start</button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        questionNo={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>next question</button>
    </div>
  );
}

export default App;
