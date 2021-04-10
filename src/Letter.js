import React from 'react';
import './Letter.css';

function Letter({ char, status, changeColor }) {
 return (
  <div className={`letter ${status == 'standby' ? 'standby' :
   status == 'correct' ? 'correct' : 'incorrect'}`} >
   <button className={`letter__char ${status == 'standby' ? 'standby' :
    status == 'correct' ? 'correct' : 'incorrect'}`}
    onClick={() => changeColor(char, status)}
   >{char}</button>
  </div>
 )
}

export default Letter
