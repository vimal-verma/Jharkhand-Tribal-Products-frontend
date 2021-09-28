import React from 'react'
import jwt_decode from 'jwt-decode'
import Nav from '../components/Dasnav'
import Footer from '../components/Footer'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'

export default function Admin() {
  var token = localStorage.getItem('token')
  if (token) {
    var decoded = jwt_decode(token)
    // console.log(decoded)
  }
  if (decoded.user.email !== process.env.REACT_APP_ADMIN) {
    window.location.pathname = '/dashboard'
  }
  return (
    <div>
      <Nav />
      <div className="dashome">
        <div className="dashleft">
          <h1>Hi, {decoded.user.name}</h1>
          <h2>Update your portfolio and Resume</h2>
        </div>
        <div className="dashright">
          <Lottie animationData={developer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
