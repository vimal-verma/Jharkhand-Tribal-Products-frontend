import React, { useState } from 'react'
import Nav from '../components/Dasnav'
import Footer from '../components/Footer'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import 'react-notifications/lib/notifications.css'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications'

export default function Image() {

  const [Image, setImage] = useState('Choose File')
  const [ImageUrl, setImageUrl] = useState('Choose File')

  const createNotification = info => {
    NotificationManager.success('Image added', 'Update Success')
  }
  const createNotificationerror = info => {
    NotificationManager.error('info', 'Error')
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', Image)
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET)

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`,
        formData
      )
      .then(res => {
        console.log(res)
        setImageUrl(res.data.url)
        createNotification()
      })
      .catch(err => {
        console.log(err)
        createNotificationerror()
      })
  }
  return (
    <div>
      <Nav />
      <NotificationContainer />
      <div className="dashome">
        <div className="dashleft">
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              name="image"
              onChange={e => setImage(e.target.files[0])}
              required
            />
            <button type="submit">Add</button>
          </form>
          <img style={{ width: '90%' }} src={ImageUrl} alt="newimage" />
          <h3>{ImageUrl}</h3>
        </div>
        <div className="dashright">
          <Lottie animationData={developer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
