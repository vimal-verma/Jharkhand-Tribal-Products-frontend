import React, { useState } from 'react'
import Nav from '../components/Nav'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import 'react-notifications/lib/notifications.css'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Link } from 'react-router-dom'

export default function Login() {
  const [User, setUser] = useState({})

  const createNotification = info => {
    NotificationManager.error(info, 'error')
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(User)
    axios
      .post('/auth/login', User)
      .then(res => {
        // console.log(res)
        localStorage.setItem('token', res.data)
        window.location.pathname = '/dashboard'
      })
      .catch(err => {
        console.log(err.response.data)
        createNotification(err.response.data)
      })
  }
  return (
    <div>
      <Nav />
      <NotificationContainer />

      <div className="home">
        <div className="left">
          <h1>
            User Login
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={e => setUser({ ...User, email: e.target.value })}
              value={User.email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={e => setUser({ ...User, password: e.target.value })}
              value={User.password}
              required
            />
            <button type="submit">Login</button>
          </form>
          <Link to="/resetpassword">Forget Password</Link>
          <Link to="/register">New to jharkhand tribal shop? Join now</Link>
        </div>
        <div style={{ height: '500px' }} className="right">
          <Lottie animationData={developer} />
        </div>
      </div>
    </div>
  )
}
