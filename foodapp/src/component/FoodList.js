import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function FoodList() {
     let[food,setFood]=useState([]);
    useEffect(()=>{
         axios.get("http://localhost:1004/food/fetch")
        .then((res)=>{
            console.log(res.data);
            setFood(res.data);
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div >
         {
            food.length>0 ? 
            <div style={{width:"30%",margin:"50px auto"}}>
                <table className='table table-hover table-striped'>
                    <thead className='table table-dark'>
                        <tr>
                            <th>food ID</th>
                            <th>food Name</th>
                            <th>Price</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            food.map((element,index)=>{
                                return(
                                    <tr>
                                    <td>{element.fid}</td>
                                    <td>{element.fname}</td>
                                    <td>{element.price}</td>
                                    </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </div>:<h2 style={{color:"red"}}>no food available at present 🫥</h2>
        }
    </div>
  )
}

export default FoodList;