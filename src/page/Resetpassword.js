import React, { useState } from 'react'
import Nav from '../components/Nav'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import 'react-notifications/lib/notifications.css'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Link } from 'react-router-dom'

export default function Resetpassword() {
  const [User, setUser] = useState({})

  const createNotification = info => {
    NotificationManager.success('Check your email', 'Email sent Success')
  }
  const createNotificationerror = info => {
    NotificationManager.error(info, 'Error')
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(User)
    axios
      .post('/auth/resetpassword', User)
      .then(res => {
        createNotification()
      })
      .catch(err => {
        console.log(err.response.data)
        createNotificationerror(err.response.data)
      })
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
              onChange={e => setUser({ ...User, email: e.target.value })}
              value={User.email}
              required
            />
            <button type="submit">Request reset url</button>
          </form>
          <Link to="/register">New to jharkhand tribal shop? Join now</Link>
        </div>
        <div style={{ height: '500px' }} className="right">
          <Lottie animationData={developer} />
        </div>
      </div>
    </div>
  )
}
