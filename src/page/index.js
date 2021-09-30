import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'
import textture from '../assets/texture.png'
import ReactTooltip from 'react-tooltip'
// import Card from '../utils/Card'
import Products from '../components/Products'
import Welcome from '../components/Welcome'
import Blogs from '../components/Blogs'

export default function Home() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const [val1, setShow1] = useState(false)
  const [val2, setShow2] = useState(false)
  const [val3, setShow3] = useState(false)

  return (
    <div>
      {/* <Card text="Take a demo of our Product" linkto="product" /> */}
      <ReactTooltip html={true} />
      <Nav />

      {/* Welcome */}
      <Welcome />


      {/* Why Vimal */}
      <div className="whyto">
        <h1 data-aos="zoom-in-up">Why Jharkhand tribal art</h1>
        <div className="boxes why">
          <div data-aos="fade-up" className="box">
            <i style={{ color: '#2643e9' }} class="fas fa-globe"></i>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="box">
            <i style={{ color: '#1aae6f' }} class="fas fa-tools"></i>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="box">
            <i style={{ color: '#ff3709' }} class="fas fa-star"></i>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="box">
            <i style={{ color: '#2643e9' }} class="fas fa-globe"></i>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="box">
            <i style={{ color: '#1aae6f' }} class="fas fa-tools"></i>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="box">
            <i style={{ color: '#ff3709' }} class="fas fa-star"></i>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <h1 data-aos="zoom-in-up">Products</h1>
      <Products limit="10" />
      <Link to="/product">
        <button>
          More Products <i class="fas fa-arrow-right"></i>{' '}
        </button>
      </Link>

      {/* Blogs */}
      <h1 data-aos="zoom-in-up">Blogs</h1>
      <Blogs />
      <Link to="/blog">
        <button>
          More Blogs <i class="fas fa-arrow-right"></i>{' '}
        </button>
      </Link>

      {/* reviews container */}
      <div
        className="reviews-container"
        style={{
          backgroundColor: '#3b4354',
          backgroundImage: `url(${textture})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <h1 data-aos="zoom-in-up">Some Review</h1>
        <div className="boxes reviews wave2">
          <div data-aos="flip-up" className="box review">
            <i class="fas fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <h3>Vishal (Developer)</h3>
          </div>
          <div data-aos="flip-up" className="box review">
            <i class="fas fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <h3>Yashwant (programmer)</h3>
          </div>
          <div data-aos="flip-up" className="box review">
            <i class="fas fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <h3>Abhishek (Web Designer)</h3>
          </div>
        </div>
      </div>


      {/* FAQ */}
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <p>
          We have answers to the questions we are most commonly asked.
          <br /> Check out our answers below to find out more about digital
          marketing.
        </p>
        <div className="faq-accordion">
          <div className="faq-box">
            <div className="faq-label" onClick={() => setShow1(!val1)}>
              Section 1 <span>{val1 ? '➖' : '➕'}</span>
            </div>
            {val1 && (
              <div className="faq-panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            )}
          </div>

          <div className="faq-box">
            <div className="faq-label" onClick={() => setShow2(!val2)}>
              Section 2<span>{val2 ? '➖' : '➕'}</span>
            </div>
            {val2 && (
              <div className="faq-panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            )}
          </div>

          <div className="faq-box">
            <div className="faq-label" onClick={() => setShow3(!val3)}>
              Section 3<span>{val3 ? '➖' : '➕'}</span>
            </div>
            {val3 && (
              <div className="faq-panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
