import React, { useState } from 'react'
import axios from 'axios'
function AddProduct() {
    let[product,setProduct]=useState({
        pid:"",
        pname:"",
        pqty:"",
        price:""
    })
    let[msg,setMsg]=useState("");
    const addData=()=>{
        axios.post("http://localhost:1004/product/add",product)
        .then((res)=>{
            console.log(res.data);
            setMsg(res.data);
        })
        .catch((error)=>{
            alert("Something went wrong😣");
        })
    }
    const refreshData = () => {
    setProduct({
        pid:"",
        pname:"",
        pqty:"",
        price:""
    })
    setMsg("")
  }
  return (
    <div style ={{width:"30%", margin:"50px auto"}}>
        <h2>Add Product form</h2>
        <input type='text' className='form-control'value={product.pid}
        onChange={(event)=>{
            setProduct({
                ...product,
                pid:event.target.value
            })
        }}
        placeholder='Enter the product id' />
      <input type='text' className='form-control'
      value={product.pname}
        onChange={(event)=>{
            setProduct({
                ...product,
                pname:event.target.value
            })
        }} placeholder='Enter the product name' />
      <input type='text' className='form-control'
      value={product.pqty}
        onChange={(event)=>{
            setProduct({
                ...product,
                pqty:event.target.value
            })
        }} placeholder='Enter the product quantity' />
      <input type='text' className='form-control'
      value={product.price}
        onChange={(event)=>{
            setProduct({
                ...product,
                price:event.target.value
            })
        }} placeholder='Enter the price' />
      <button className='btn-btn-outline-primary'onClick={addData}>Add</button>&nbsp;&nbsp;
      <button className='btn-btn-outline-secondary' onClick={refreshData}>Refresh</button>
      <h2>{msg}</h2>
    </div>
  )
}

export default AddProduct