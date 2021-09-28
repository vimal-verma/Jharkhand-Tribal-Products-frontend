import React from 'react'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import bg from '../assets/bg.svg'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import jwt_decode from 'jwt-decode'
import Footer from '../components/Footer'

export default function Nofound() {
  var token = localStorage.getItem('token')
  if (token) {
    try {
      var decoded = jwt_decode(token)
    } catch (error) {
      localStorage.clear('token')
      window.location.pathname = '/'
    }
  }

  return (
    <div>
      <Nav />
      <div style={{ backgroundImage: `url(${bg})` }} className="wave"></div>

      <div className="home">
        <div className="left">
          <h1>It look like you have missed</h1>
          {!decoded && (
            <div>
              <h3>Create account and design your portfolio</h3>
              <Link to="/register">
                <button> Register </button>
              </Link>
            </div>
          )}
          {decoded && (
            <div>
              <h3>Go back to home page</h3>
              <Link to="/">
                <button> Home </button>
              </Link>
            </div>
          )}
        </div>
        <div style={{ height: '500px' }} className="right up-down">
          <Lottie animationData={developer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
