import React, { useState } from 'react';
import './room.css';



function Room() {
    let [isLit, setLit] = useState(false); 
    let [temp, setTemp] = useState(72);
  
    return (
    
  <div className={`room ${isLit? "lit" : "dark"}`}> 
      <h1> Assignment 4</h1>
      <button onClick={() => setLit(true)}>ON</button>
        <button onClick={() => setLit(false)}>OFF</button>
      <br/>
      Temperature: {temp} +
      <button onClick= {() => {setTemp(++temp)}}> + </button>
      <button onClick= {() => {setTemp(--temp)}}> - </button>
  </div>
    
  );
}

export default Room;
