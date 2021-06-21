import React, { useState } from 'react';
import '../styles/Home.css';
import Letter from './Letter.js';
import Space from './Space.js'
import Hangman from './Hangman';
import alphabetArray from '../db/Alphabet';
import questArray from '../db/Questions';
import Modal from 'react-modal';


var random = Math.floor(Math.random() * (questArray.length - 1));

var question = questArray[random].question;
var answer = [...questArray[random].answer];
var answerLength = ((questArray[random].answer).replaceAll(' ', '')).length;

function Home() {
  const [alphabet, setAlpha] = useState(alphabetArray);
  const [errors, setErrors] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [modal1IsOpen, set1IsOpen] = useState(false);
  const [modal2IsOpen, set2IsOpen] = useState(false);


  function newGame() {
    setAlpha(alphabetArray);
    setErrors([]);
    setCorrect(0);
    random = Math.floor(Math.random() * (questArray.length));
    question = questArray[random].question;
    answer = [...questArray[random].answer];
    answerLength = ((questArray[random].answer).replaceAll(' ', '')).length;
  }


  function isCharInAnswer(char, answer) {
    var counter = 0;
    for (const x of answer) {
      if (x === char) {
        counter += 1;
      }
    }
    if (counter > 0) {
      if ((correct + counter) == answerLength) {
        openModal1();
      }
      setCorrect(correct + counter);
      return true;
    }



    if ((alphabet.find((x) => (x.char) == char)).status == "standby") {
      setErrors([...errors, char]);
    }
    if (errors.length == 7) {

      openModal2();
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

  function openModal1() {
    var timer = setTimeout(() => set1IsOpen(true), 300)
  }

  function closeModal1() {
    set1IsOpen(false);
    newGame();
  }

  function openModal2() {
    var timer2 = setTimeout(() => set2IsOpen(true), 300)
  }

  function closeModal2() {
    set2IsOpen(false);
    newGame();
  }



  return (
    <div className="home" >

      <h1 className="home__title">Hangman App</h1>


      <button className="home__button" onClick={newGame}>New Game</button>


      <div className="home__errors">
        <h3>Wins: {errors.length}</h3>
        <h3>Losses: {errors.length}</h3>
      </div>

      <div className="home__row">
        <div className="home__question">
          <h1>{question}</h1>
        </div>

        <div className="home__hangman">
          <Hangman errors={errors.length} />
        </div>
      </div>

      <div className="home__answer">
        {answer.map((y) =>
          <Space
            char={alphabet.find(x => x.char === y).char}
            status={alphabet.find(x => x.char === y).status}

          />)}
      </div>

      <div className="home__alphabet">
        {alphabet.map(letter => (
          (letter.char === ' ') ? <></> :
            <Letter
              char={letter.char}
              status={letter.status}
              changeColor={changeColor}
            />
        ))}

      </div>
      <div >
        <Modal
          className="Modal1"
          overlayClassName="Overlay1"
          isOpen={modal1IsOpen}
          onRequestClose={closeModal1}
          contentLabel="Example Modal"
        >
          <div>You win!</div>
          <button className="home__button2" onClick={closeModal1}>New Game</button>
        </Modal>
      </div>
      <div >
        <Modal
          className="Modal2"
          overlayClassName="Overlay2"
          isOpen={modal2IsOpen}
          onRequestClose={closeModal2}
          contentLabel="Example Modal"
        >
          <div>You lose!</div>
          <div style={{ fontSize: '1rem' }}>The answer was : {answer}</div>
          <button className="home__button2" onClick={closeModal2}>New Game</button>
        </Modal>
      </div>

    </div >
  )
}

export default Home
