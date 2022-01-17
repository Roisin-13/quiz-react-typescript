import React from 'react';

import QuestionCard from './components/QuestionCard';


function App() {
  const startQuiz = async () => {}
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}
  
const nextQuestion = () => {}

  return (
    <div className="App">
      <h1>React-Typescript Quiz</h1>
      <button className="start" onClick={startQuiz}>start</button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard/>
      <button className="next" onClick={nextQuestion}>next question</button>
    </div>
  );
}

export default App;
