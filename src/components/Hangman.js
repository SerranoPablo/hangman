import React from 'react';
import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import seven from '../images/7.png';
import eight from '../images/8.png';
import nine from '../images/9.png';


function Hangman({ errors }) {
 function renderImage() {
  switch (errors + 1) {
   case (1):
    return one;
   case (2):
    return two;
   case (3):
    return three;
   case (4):
    return four;
   case (5):
    return five;
   case (6):
    return six;
   case (7):
    return seven;
   case (8):
    return eight;
   case (9):
    return nine;
   default:
    return nine;
  }
 }
 return (
  <div>
   <img src={renderImage()} alt="" />

  </div>
 )
}

export default Hangman
