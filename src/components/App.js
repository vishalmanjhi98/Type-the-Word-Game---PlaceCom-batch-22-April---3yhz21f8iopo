import React, { useState, useEffect } from 'react';
import "../styles/App.css";
const WORD_LIST = ["apple", "banana", "cherry", "orange"];
function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDisplayingWord, setIsDisplayingWord] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDisplayingWord(false);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentWordIndex]);
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === WORD_LIST[currentWordIndex]) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  const handleRestart = () => {
    setIsCorrect(null);
    setIsDisplayingWord(true);
    setUserInput("");
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
  };
  const handleStart = () => {
    setIsCorrect(null);
    setIsDisplayingWord(true);
    setUserInput("");
    setCurrentWordIndex(0);
  };
  if (isDisplayingWord) {
    return <p>{WORD_LIST[currentWordIndex]}</p>;
  }
  return (
    <div>
      {isCorrect === true && <p>You won!</p>}
      {isCorrect === false && <p>You lost!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleRestart}>Restart</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default App