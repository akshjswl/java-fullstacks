import React, { useState } from 'react'
import B from './B';
function A() {
    let[state,setState]=useState("");
    const populateData=(event)=>{
        setState(event.target.value);
    }
  return (
    <div>
        <h2>Parent Component</h2>
        <input type='text' placeholder='Enter your name' onChange={populateData}/>
        <B data={state}/>
    </div>
  )
}

export default A