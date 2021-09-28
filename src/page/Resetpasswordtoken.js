import React, { useState } from 'react'
import Nav from '../components/Nav'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import 'react-notifications/lib/notifications.css'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications'

export default function Resetpasswordtoken({ match }) {
  const token = match.params.token

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
    if (User.password === User.cpassword) {
      axios
        .post(`/auth/resetpassword/${token}`, User)
        .then(res => {
          createNotification()
        })
        .catch(err => {
          console.log(err.response.data)
          createNotificationerror(err.response.data)
        })
    } else {
      NotificationManager.error("password didn't matched", 'Error')
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
              placeholder="Password"
              type="password"
              name="password"
              onChange={e => setUser({ ...User, password: e.target.value })}
              value={User.password}
              required
            />
            <input
              placeholder="Confirm Password"
              type="password"
              name="cpassword"
              onChange={e => setUser({ ...User, cpassword: e.target.value })}
              value={User.cpassword}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
        </div>
        <div style={{ height: '500px' }} className="right">
          <Lottie animationData={developer} />
        </div>
      </div>
    </div>
  )
}
