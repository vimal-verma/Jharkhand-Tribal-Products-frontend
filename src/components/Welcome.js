import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import Lottie from '../utils/lottie';
import developer from '../assets/groth.json';

export default function Welcome({ title, description, button, video }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="home">
      <div
        data-aos="zoom-in-up"
        data-aos-delay="400"
        data-aos-duration="750"
        className="left"
      >
        <h1 style={{ fontSize: '3em' }}>support jharkhand tribal art and culture </h1>
        <p>
          "Project build under IIIT Ranchi Students for the Jharkhand Tribal Groups with the aim of providing a platform to sell their products."
        </p>
        <Link to="/product">
          <div className="slide-button">
            <button>
              {' '}
              {button ? button : 'Order Your Website Now'}{' '}
              <i class="fas fa-arrow-right"></i>{' '}
            </button>
          </div>
        </Link>
      </div>
      <div data-aos="zoom-in-up" className="right">
        <Lottie animationData={developer} />
      </div>
    </div>
  )
}
