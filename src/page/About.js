import React from 'react'
import Nav from '../components/Nav'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
// import bg from '../assets/bg.svg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <Nav />
      {/* <div style={{backgroundImage: `url(${bg})`}} className="wave"></div> */}

      <div className="home">
        <div className="left">
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <Link to="/product">
            <button>
              {' '}
              Buy Now <i class="fas fa-arrow-right"></i>{' '}
            </button>
          </Link>
          <Link to="/product">
            <button>
              {' '}
              Buy Now <i class="fas fa-arrow-right"></i>{' '}
            </button>
          </Link>
        </div>
        <div style={{ height: '500px' }} className="right">
          <Lottie animationData={developer} />
        </div>
      </div>
      <div style={{ padding: '40px' }} className="demo">
        <div className="demoleft">
          <h1>hjhj</h1>
        </div>
        <div className="demoright">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <Link to="/developer">
          <button>Developer</button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}
