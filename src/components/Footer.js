import { Link } from 'react-router-dom'
import logo from '../assets/logo2.png'

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="footer-logo">
          <Link to="/" tag={Link} className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <p>IIIT Ranchi</p>
          <p>JUT, Science and Technology Campus, Namkum</p>
          <p>Ranchi, Jharkhand</p>
          <p>834010, India</p>
        </div>
        {/* <div>
                <h3>RESOURCES</h3>
                <p>Website</p>
                <p>Website Features</p>
                <p>How it works</p>
                <p>FAQ</p>
                <p>Supports</p>
                <p>Submit Ticket</p>
            </div> */}
        <div>
          <h3>WEBSITE</h3>
          <p>Website</p>
          <p>Website Features</p>
          <p>How it works</p>
          <p>FAQ</p>
          <p>Supports</p>
          <p>Submit Ticket</p>
        </div>
        <div>
          <h3>COMPANY</h3>
          <Link
            to="/changelog"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <p>Changelog</p>
          </Link>
          <Link
            to="/contact"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <p>Contact</p>
          </Link>
          <Link to="/blog" style={{ color: 'white', textDecoration: 'none' }}>
            <p>Blog</p>
          </Link>
          <Link to="/terms" style={{ color: 'white', textDecoration: 'none' }}>
            <p>Terms</p>
          </Link>
          <Link
            to="/developer"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <p>Developer</p>
          </Link>
        </div>
        <div>
          <h3>CONNECT WITH US</h3>
          <div className="social">
            <a href="https://github.com/vimal-verma">
              <span className="fa fa-github"></span>
            </a>
            <a href="https://twitter.com/vimalverma_in">
              <span className="fa fa-twitter"></span>
            </a>
            <a href="https://www.linkedin.com/in/vimal-verma/">
              <span className="fa fa-linkedin"></span>
            </a>
            <a href="mailto:me@Vimalverma.in">
              <span className="fa fa-envelope"></span>
            </a>
          </div>
          <div style={{ marginTop: '20px' }}>
            <input
              placeholder="Enter your email"
              name="email"
              type="email"
              style={{
                padding: '12px',
                borderRadius: '5px',
                borderStyle: 'none',
              }}
              required
            />
            <button
              type="submit"
              style={{
                backgroundColor: 'white',
                color: '#4ab484',
                margin: '10px',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <div style={{ textAlign: 'center', margin: '13px' }}>
          <p>
            All other Brand Names and Logos are trademarks of their respective
            owners.
          </p>
          <p>© 2020-2021 Vimal. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
