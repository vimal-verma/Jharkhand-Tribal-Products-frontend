import React, { useState } from 'react'
import Nav from '../components/Usernav'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import jwt_decode from 'jwt-decode'
import 'react-notifications/lib/notifications.css'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Link } from 'react-router-dom'

export default function Changepassword() {
  var token = localStorage.getItem('token')
  if (token) {
    var decoded = jwt_decode(token)
    console.log(decoded)
  }
  if (!decoded) {
    window.location.pathname = '/login'
  }

  const [User, setUser] = useState({})

  const createNotification = info => {
    NotificationManager.success('Password changed', 'Update Success')
  }
  const createNotificationerror = info => {
    NotificationManager.error(info, 'Error')
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(User)
    if (User.newpassword === User.cnewpassword) {
      axios
        .post('/auth/changepassword', User)
        .then(res => {
          createNotification()
        })
        .catch(err => {
          console.log(err.response.data)
          createNotificationerror(err.response.data)
        })
    } else {
      NotificationManager.error("New Password didn't matched", 'Error')
    }
  }
  return (
    <div>
      <Nav />
      <NotificationContainer />

      <div className="home">
        <div className="left">
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={decoded.user.email}
              required
            />
            <input
              placeholder="Old Password"
              type="password"
              name="password"
              onChange={e => setUser({ ...User, password: e.target.value })}
              value={User.password}
              required
            />
            <input
              placeholder="New Password"
              type="password"
              name="newpassword"
              onChange={e => setUser({ ...User, newpassword: e.target.value })}
              value={User.newpassword}
              required
            />
            <input
              placeholder="Confirm New Password"
              type="password"
              name="cnewpassword"
              onChange={e => setUser({ ...User, cnewpassword: e.target.value })}
              value={User.cnewpassword}
              required
            />
            <button type="submit">Change password</button>
          </form>
          <Link to="/resetpassword">Forget Password</Link>
        </div>
        <div style={{ height: '500px' }} className="right">
          <Lottie animationData={developer} />
        </div>
      </div>
    </div>
  )
}
