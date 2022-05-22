import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../App.css'

export default function Developer() {
  return (
    <div>
      <Nav />
      <div className="developer-container">
        <div className="welcome-background">
          <h1>Our Developers</h1>
          <p>
            The project is to develop a custom website where Jharkhand Tribal products can be sold online. Administrator, in this case client will be responsible for managing the product details and the users, in this case customers from the web based backend panel. The development has to be from scratch with development of backend and front end as well as an admin website for controlling and operating the website. The development has to be scalable for an increase in the number of users.
          </p>
        </div>
        <div className="developer-card">
          <div className="developer-column">
            <div className="our-team">
              <div className="pic">
                <img
                  src="https://avatars.githubusercontent.com/u/46487476?v=4"
                  alt="developer expert"
                />
                <div className="social">
                  <a href="https://github.com/vimal-verma">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-github"
                    ></span>
                  </a>
                  <a href="https://twitter.com/vimalverma_in">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-twitter"
                    ></span>
                  </a>
                  <a href="https://www.linkedin.com/in/vimal-verma">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-linkedin"
                    ></span>
                  </a>
                  <a href="mailto:me@vimalverna.in">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-envelope"
                    ></span>
                  </a>
                </div>
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3 className="title">Vimal Kumar</h3>
                  <span className="post">Full Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="developer-column">
            <div className="our-team">
              <div className="pic">
                <img
                  src="https://avatars.githubusercontent.com/u/64608676?v=4"
                  alt="developer expert"
                />
                <div className="social">
                  <a href="https://github.com/Abhishekkr93">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-github"
                    ></span>
                  </a>
                  <a href="https://twitter.com/amazing__ak">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-twitter"
                    ></span>
                  </a>
                  <a href="https://www.linkedin.com/in/abhishek-kumar-7052">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-linkedin"
                    ></span>
                  </a>
                  <a href="mailto:support@Vimal.us">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-envelope"
                    ></span>
                  </a>
                </div>
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3 className="title">Akash Anand</h3>
                  <span className="post">Full Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="developer-column">
            <div className="our-team">
              <div className="pic">
                <img
                  src="https://avatars.githubusercontent.com/u/56020385?v=4"
                  alt="developer expert"
                />
                <div className="social">
                  <a href="https://github.com/Abhishekkr93">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-github"
                    ></span>
                  </a>
                  <a href="https://twitter.com/amazing__ak">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-twitter"
                    ></span>
                  </a>
                  <a href="https://www.linkedin.com/in/abhishek-kumar-7052">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-linkedin"
                    ></span>
                  </a>
                  <a href="mailto:support@Vimal.us">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-envelope"
                    ></span>
                  </a>
                </div>
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3 className="title">Abhishek Kumar</h3>
                  <span className="post">Frontend Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="developer-column">
            <div className="our-team">
              <div className="pic">
                <img
                  src="https://avatars.githubusercontent.com/u/56086999?v=4"
                  alt="developer expert"
                />
                <div className="social">
                  <a href="https://github.com/kavita1403">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-github"
                    ></span>
                  </a>
                  <a href="https://twitter.com/Kavita26626408s">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-twitter"
                    ></span>
                  </a>
                  <a href="https://www.linkedin.com/in/kavita-yadav-05a363188/">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-linkedin"
                    ></span>
                  </a>
                  <a href="mailto:support@Vimal.us">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-envelope"
                    ></span>
                  </a>
                </div>
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3 className="title">Kavita Yadav</h3>
                  <span className="post">Frontend Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
