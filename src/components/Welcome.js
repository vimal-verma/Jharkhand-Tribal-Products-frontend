import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
// import Lottie from '../utils/lottie';
// import developer from '../assets/homepage.json';

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
        <h1 style={{ fontSize: '3em' }}>
          {title ? title : 'Revive Your Developer Career. With Confidence.'}
        </h1>
        <p>
          {description
            ? description
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
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
        <div className="ratio ratio-16x9">
          <iframe
            className="responsive-iframe"
            src={video ? video : 'https://www.youtube.com/embed/xcJtL7QggTI'}
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
