import React from 'react';
import '../styles/Space.css';



function Space({ char, status, correct }) {

 return (
  <div className={`space ${char == ' ' ? 'nothing' : status == 'standby' ? 'notShow' :
   status === 'correct' ? 'show' : 'notShow'}`} >
   <h1 className='space__char' >{char}</h1>

  </div>
 )
}

export default Space
