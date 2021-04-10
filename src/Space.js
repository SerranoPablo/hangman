import React from 'react';
import './Space.css';

function Space({ char, status }) {
 return (
  <div className={`space ${status == 'standby' ? 'notShow' :
   status === 'correct' ? 'show' : 'notShow'}`} >
   <h1 className='space__char' >{char}</h1>
  </div>
 )
}

export default Space
