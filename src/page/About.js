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
            Project build under IIIT Ranchi Students for the Jharkhand Tribal Groups with the aim of providing a platform to sell their products.
          </h1>
          <p>
            The project is to develop a custom website where Jharkhand Tribal products can be sold online. Administrator, in this case client will be responsible for managing the product details and the users, in this case customers from the web based backend panel. The development has to be from scratch with development of backend and front end as well as an admin website for controlling and operating the website. The development has to be scalable for an increase in the number of users.
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
          <h1>About Us</h1>
        </div>
        <div className="demoright">
          <p>
            The project is to develop a custom website where Jharkhand Tribal products can be sold online. Administrator, in this case client will be responsible for managing the product details and the users, in this case customers from the web based backend panel. The development has to be from scratch with development of backend and front end as well as an admin website for controlling and operating the website. The development has to be scalable for an increase in the number of users.
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
