import React from 'react'

function Register({ setState }) {
  return (
    <div style={{ width: "30%", margin: "50px auto" }}>
      <h2 className='text-secondary'>Register form</h2>
      <input type='text' className='form-control' placeholder='Enter the username' />
      <input type='password' className='form-control' placeholder='Enter the password' />
      <input type='text' className='form-control' placeholder='Enter the name' />
      <button
        className='btn btn-outline-secondary'
        onClick={() => setState(true)}
      >
        Register
      </button>
    </div>
  )
}

export default Register
