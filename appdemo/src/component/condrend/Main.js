import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'

function Main() {
    let[state,setState]=useState(false);
  return (
    <div>
        <h2>Main component</h2>
        {state ? <Login/>:<Register setState={setState}/>}
        {/* <Register/>
        <Login/> */}
    </div>
  )
}

export default Main