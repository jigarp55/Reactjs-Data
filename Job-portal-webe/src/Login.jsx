// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function Login() {
 
const [data, setData] = useState({
    email : "",
    password : "",
})


const handleFormdata = (e) => {
    e.preventDefault();
    console.log('Form submitted:', data);
}

const handleChange = (e) => {
    setData({...data,[e.target.name]: e.target.value})
}

  return (
    <div>
        <form onSubmit={handleFormdata}>
            <label>Email</label>
            <input type="text" name='email' placeholder='Email' onChange={handleChange}/>
            <label>Password</label>
            <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
            <button type='save' onSubmit={handleFormdata}>Submit</button>
        </form>
    </div>
  )
}
