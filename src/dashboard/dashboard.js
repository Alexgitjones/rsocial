import React from 'react'
import Login from './login'
import Register from './register'

export default function Dashboard() {
  return (
    <div className='container'>
      <div className='login mb-5 d-flex justify-content-center'>
        <h2>Login</h2>
        <Login />
      </div>
      <div className='register d-flex justify-content-center'>
        <h2>Register</h2>
        <Register />
      </div>
    </div>
  )
}
