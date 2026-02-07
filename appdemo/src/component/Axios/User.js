import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function User() {
    let[user,setUser]=useState([]);
    const getData=()=>{
        axios.get("https://randomuser.me/api/?results=200")
        .then((res)=>{
            console.log(res.data.results);
            setUser(res.data.results);
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
        <h2>user Info</h2>
        <button onClick={getData}> Get data</button>
        {
            user.length>0 ? 
            <div>
                <table className='table table-hover'>
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

export default User