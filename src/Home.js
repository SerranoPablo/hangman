import React, { useState } from 'react';
import './Home.css';
import Letter from './Letter.js';
import Space from './Space.js'
import alphabetArray from './Alphabet';


function Home() {
 const [alphabet, setAlpha] = useState(alphabetArray);
 let answer = "CLINT";

 function newGame() {
  setAlpha(alphabetArray);
 };

 function isCharInAnswer(char, answer) {

  for (var i = 0; i < answer.length; i++) {
   if (answer.charAt(i) === char) {
    return true;
   }
  }
  return false;
 }
 function changeColor(char, status) {
  const newStatus = (isCharInAnswer(char, answer) ? 'correct' : 'incorrect');
  if (status == 'standby') {
   const newAlphabet = alphabet.map((item) => {
    if (item.char === char) {
     const updatedItem = {
      ...item,
      status: newStatus
     };
     return updatedItem;
    }
    return item;
   });
   setAlpha(newAlphabet);
  }
 }

 return (
  <div className="home">

   <h1>Hangman App</h1>
   <button onClick={newGame}>New Game</button>
   <div className="home__answer">
    <Space
     char={alphabet.find(x => x.char === 'C').char}
     status={alphabet.find(x => x.char === 'C').status}
    />
    <Space
     char={alphabet.find(x => x.char === 'L').char}
     status={alphabet.find(x => x.char === 'L').status}
    />
    <Space
     char={alphabet.find(x => x.char === 'I').char}
     status={alphabet.find(x => x.char === 'I').status}
    />
    <Space
     char={alphabet.find(x => x.char === 'N').char}
     status={alphabet.find(x => x.char === 'N').status}
    />
    <Space
     char={alphabet.find(x => x.char === 'T').char}
     status={alphabet.find(x => x.char === 'T').status}
    />
   </div>
   <div className="home__alphabet">
    {alphabet.map(letter => {
     return <Letter
      char={letter.char}
      status={letter.status}
      changeColor={changeColor}
     />
    })}

   </div>

  </div >
 )
}

export default Home
