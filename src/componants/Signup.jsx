import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Signup(props) {

  const history = useHistory();

  let [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json()
    console.log(json)

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authToken)
      history.push("/")
      props.showAlert("Account Created Successfully", "success")
    }
    else {
      props.showAlert("There is a problem while creating your account. Please try again", "danger")
    }
  }

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }

  return (
    <div className='container mt-2'>
      <h2>Create an Account to use NoteBook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" required id="name" name='name' onChange={handleOnChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" required name='email' id="exampleInputEmail1" onChange={handleOnChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" required minLength={5} name='password' onChange={handleOnChange} id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" required minLength={5} name='cpassword' onChange={handleOnChange} id="cpassword" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
