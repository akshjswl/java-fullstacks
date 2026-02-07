import React, { useState } from 'react'
import Child from './Child'
function Parent() {
    let[state,setState]=useState("");
    const populateData=(event)=>{
        setState(event.target.value);
    }
  return (
    <div>
        <h2>Parent Component</h2>
        <input type='text' placeholder='Enter your name' onChange={populateData}/>
        <Child data={state}/>
    </div>
  )
}

export default Parent