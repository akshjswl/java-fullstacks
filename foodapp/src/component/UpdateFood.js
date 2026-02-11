import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function UpdateFood() {
     let[food,setfood]=useState({
            fid:"",
            fname:"",
            price:""
        })
        let[msg,setMsg]=useState("");
         const refreshData=()=>{
        setfood({
            fid:"",
            fname:"",
            price:""
        })
        setMsg("");
    }
        const updateData=(fid)=>{
            alert(fid);
        axios.put(`http://localhost:1004/food/upd/${fid}`,food)
        .then((res)=>{
            console.log(res.data);
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error.response.data);
            alert("SOMETHING WENT WRONG TO UPDATE DATA");
        })
        }

  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2 className='text-warning'>UPDATE food FORM</h2>
       <input type='text' className='form-control' value={food.fid} placeholder='ENTER THE food ID'
       onChange={(event)=>{
         setfood({
            ...food,
            fid:event.target.value
         })

       }}/>
      <input type='text' className='form-control' value={food.fname} placeholder='ENTER THE food NAME'
       onChange={(event)=>{
         setfood({
            ...food,
            fname:event.target.value
         })

       }}/>
     <input type='text' className='form-control' value={food.price} placeholder='ENTER THE food PRICE'
       onChange={(event)=>{
         setfood({
            ...food,
            price:event.target.value
         })

       }}/>
       <button className='text-warning' 
       onClick={()=>{
        updateData(food.fid)
       }}>UPDATE</button>&nbsp;&nbsp;
       <button className='text-warning' onClick={refreshData}>REFRESH</button>
        <h3 className='text-success'>{msg}</h3>
    </div>
  )
}

export default UpdateFood