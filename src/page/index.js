import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'
import bg2 from '../assets/bg2.svg'
import textture from '../assets/texture.png'
import ReactTooltip from 'react-tooltip'
import Card from '../utils/Card'
import Products from '../components/Products'
import image1 from '../assets/service.jpg'
import digitalImage from '../assets/digitalImage.jpg'
import Welcome from '../components/Welcome'
import Contact from '../components/Contact'
import Quotation from '../components/Quotation'
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
      <Card text="Take a demo of our Product" linkto="product" />
      <ReactTooltip html={true} />
      <Nav />

      {/* Welcome */}
      <Welcome />

      {/* Services */}
      <div className="services">
        <h1>Popular Services</h1>
        <div className="services-row">
          <a href="/seo">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>Search Engine Optimization</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>

          <a href="/paid">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>Paid Marketing</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>

          <a href="/product">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>Content Writing</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>

          <a href="/product">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>Custom Website Design</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>
        </div>
        <div className="services-row">
          <a href="/product">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>App Development</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>

          <a href="/product">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>360 Digital Marketing</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>

          <a href="/product">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>Amazon eBay, etsy, walmart, product listing</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>

          <a href="/product">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>Complete Store Management</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>
        </div>
        <div className="services-row">
          <a href="/product">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>Dropshipping Product Research</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>

          <a href="/product">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>Social Media Management</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>

          <a href="/product">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>Shopify Product funnel Design</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>

          <a href="/product">
            <div className="services-column">
              <div className="services-card">
                <img src={image1} alt="Avatar" />
                <div className="services-text">
                  <h3>Logo Design</h3>
                  <p>Some text</p>
                </div>
                <div className="services-line"></div>
                <p className="right-text">Some text</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Why Vimal */}
      <div className="whyto">
        <h1 data-aos="zoom-in-up">Why Vimal</h1>
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
      <Products limit="3" />
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

      {/* Get Ready */}
      <div
        className="boxes"
        style={{
          backgroundColor: '#3b4354',
          backgroundImage: `url(${textture})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          data-aos="fade-up-right"
          style={{
            color: 'wheat',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '2em',
            flexDirection: 'column',
          }}
        >
          <h1>Get Your Ready to Use Website Today</h1>
          <Link to="/product">
            <div className="slide-button">
              <button>
                {' '}
                ORDER YOUR WEBSITE NOW <i class="fas fa-arrow-right"></i>{' '}
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* reviews container */}
      <div
        className="reviews-container"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <h1 data-aos="zoom-in-up">Some Review</h1>
        <div className="boxes reviews wave2">
          <div data-aos="flip-up" className="box review">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
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
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
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
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
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

      {/* Quotation Form */}
      <Quotation />

      {/* Contact */}
      <Contact />
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

      {/* Digital Expert */}
      <div className="digital-container">
        <div className="digital-heading">
          <h1>Book a 1-on-1 Appointment With Our Digital Marketing Expert</h1>
        </div>
        <div className="digital-text">
          <p>
            Our digital marketing experts dedicated to helping you succeed.
            <br />
            Talk to an expert and get solid advice in a Free 30 minutes of talk.
          </p>
        </div>
        <div className="digital-card">
          <div className="digital-column">
            <div className="digital-image">
              <img src={digitalImage} alt="digital expert" />
            </div>
            <div className="column-text">SEO</div>
            <div className="column-btn">
              <button>Book A Appointment</button>
            </div>
          </div>
          <div className="digital-column">
            <div className="digital-image">
              <img src={digitalImage} alt="digital expert" />
            </div>
            <div className="column-text">Social Media</div>
            <div className="column-btn">
              <button>Book A Appointment</button>
            </div>
          </div>
          <div className="digital-column">
            <div className="digital-image">
              <img src={digitalImage} alt="digital expert" />
            </div>
            <div className="column-text">Digital Marketing</div>
            <div className="column-btn">
              <button>Book A Appointment</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
