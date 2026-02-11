import React from 'react'

function Login() {
  return (
    <div style={{width:"30%", margin:"50px auto"}}>
        <h2 className='text-secondary'>Login form</h2>
        <input type='text'className='form-control' placeholder='Enter the username'/>
        <input type='password'className='form-control' placeholder='Enter the password'/>
        <button className='btn btn-outline-primary'>Register</button>
    </div>
  )
}

export default Login