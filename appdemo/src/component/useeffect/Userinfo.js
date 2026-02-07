import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Userinfo() {
     let[user,setUser]=useState([]);
    useEffect(()=>{
         axios.get("https://randomuser.me/api/?results=20")
        .then((res)=>{
            console.log(res.data.results);
            setUser(res.data.results);
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div >
         {
            user.length>0 ? 
            <div style={{width:"30%",margin:"50px auto"}}>
                <table className='table table-hover table-striped'>
                    <thead className='table table-dark'>
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>Image</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>City</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((element,index)=>{
                                return(
                                    <tr>
                                    <td>{index+1}</td>
                                    <td>{element.name.first}</td>
                                    <td><img src={element.picture.medium} height={80} width={80}/></td>
                                    <td>{element.gender}</td>
                                    <td>{element.email}</td>
                                    <td>{element.location.city}</td>
                                    
                                    </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </div>:<h2 style={{color:"red"}}>no user information 🫥</h2>
        }
    </div>
  )
}

export default Userinfo