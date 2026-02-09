import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='mContainer'>
        {/* <h2>Main Container</h2>  */}
        <div className='lContainer'>
        <h2>Prac App</h2>
    </div>
    <div className='rContainer'>
        <a href='/state'>State</a>
        <a href='/profile'>Profile</a>
        <a href='/props'>Props</a>
        <a href='/pdrilling'>PROPSDRILLIING</a>
        <a href='/context'>Context</a>
        <a href='/Axios'>Axios</a>
        <a href='/useeffect'>useeffect</a>
        <a href='/crend'>condrend</a>
        <a href='/product'>Product</a>
        

    </div>
    </div>
  )
}

export default Nav