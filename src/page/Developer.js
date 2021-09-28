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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
                  src="https://avatars.githubusercontent.com/u/47490316?v=4"
                  alt="developer expert"
                />
                <div className="social">
                  <a href="https://github.com/imPGupta">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-github"
                    ></span>
                  </a>
                  <a href="https://twitter.com/imPGupta_">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-twitter"
                    ></span>
                  </a>
                  <a href="https://www.linkedin.com/in/imPGupta">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-linkedin"
                    ></span>
                  </a>
                  <a href="mailto:prashantkgupta17@gmail.com">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-envelope"
                    ></span>
                  </a>
                </div>
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3 className="title"> Prashant Kumar Gupta</h3>
                  <span className="post">Frontend Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="developer-column">
            <div className="our-team">
              <div className="pic">
                <img
                  src="https://avatars.githubusercontent.com/u/63895602?v=4"
                  alt="developer expert"
                />
                <div className="social">
                  <a href="https://github.com/ishangoyal13">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-github"
                    ></span>
                  </a>
                  <a href="https://twitter.com/imPGupta_">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-twitter"
                    ></span>
                  </a>
                  <a href="https://www.linkedin.com/in/imPGupta">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-linkedin"
                    ></span>
                  </a>
                  <a href="mailto:prashantkgupta17@gmail.com">
                    <span
                      style={{ padding: '5px', fontSize: '25px' }}
                      className="fa fa-envelope"
                    ></span>
                  </a>
                </div>
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3 className="title"> Ishan Goyal </h3>
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
