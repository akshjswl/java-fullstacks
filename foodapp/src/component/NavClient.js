import React from 'react'
import "./Nav.css"
function NavClient() {
  return (
    <div className='mContainer'>
        {/* <h2>Main Container</h2>  */}
        <div className='lContainer'>
        <h2>Food App Client</h2>
    </div>
    <div className='rContainer'>
        <a href='/foodlistclient'>Food List</a>
        <a href='/sfoodclient'>Search Food</a>
        <a href='/addorder'>Add Order</a>
        <a href='/billing'>Billing</a>
        <a href='/contact'>Contact Us</a>
    </div>
    </div>
  )
}

export default NavClient