import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='mContainer'>
        {/* <h2>Main Container</h2>  */}
        <div className='lContainer'>
        <h2>Food App Admin</h2>
    </div>
    <div className='rContainer'>
        <a href='/addfood'>Add Food</a>
        <a href='/foodlist'>Food List</a>
        <a href='/delfood'>Delete Food</a>
        <a href='/updfood'>Update Food</a>
        <a href='/sfood'>Search Food</a>
        <a href='/contact'>Contact Us</a>
    </div>
    </div>
  )
}

export default Nav