// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function Registration() {
 
const [data, setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : "",
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
            <label>FirstName</label>
            <input type="text" name='firstName' placeholder='FirstName' onChange={handleChange}/>
            <label>LastName</label>
            <input type="text" name='lastName' placeholder='LastName' onChange={handleChange}/>
            <label>Email</label>
            <input type="text" name='email' placeholder='Email' onChange={handleChange}/>
            <label>Password</label>
            <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
            <label>Confirm Password</label>
            <input type="password" name='confirmPassword' placeholder='Confirm Password' onChange={handleChange}/>

            <button type='save' onSubmit={handleFormdata}>Submit</button>
        </form>
    </div>
  )
}
