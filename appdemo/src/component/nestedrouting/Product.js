import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"
import { Outlet } from 'react-router-dom'
function Product() {
  return (
    <div className='pmContainer'>
       
       <div className='plContainer'>
        <Link to="electronics">Electronics</Link>
        <Link to="retails">Retails</Link>
        <Link to="garments">Garments</Link>
        <Link to="jewellery">Jewellery</Link>
       </div>
       <div className='prContainer'>
        <Outlet/>
       </div>
    </div>
  )
}

export default Product