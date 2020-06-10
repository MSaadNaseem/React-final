import React, { useState } from 'react';



function Room() {
  
    let [islit, setLit] = useState(false);
    let [age, setAge] = useState(23);
    function updatelit() {
        console.log ("Button Clicked");
        setLit(!islit);
    }
    
  
    return (
    
  <div>
      this room {islit? "lit" : "dark"} 
      <br/>
      Age: {age};
      <button onClick={updatelit}>Toggle Light</button>
      <button onClick={()=> {
                                setAge(++age);
                            }}
            >Increase Age
       </button>
  </div>
    
  );
}

export default Room;
