import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './nav.css'
import logo from '../assets/navlogo.png'
import jwt_decode from 'jwt-decode'

export default function Nav() {
  var token = localStorage.getItem('token')
  if (token) {
    var decoded = jwt_decode(token)
    // console.log(decoded)
  }

  return (
    <div className="navbar">
      <header className="header">
        <NavLink to="/" tag={Link} className="logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li class="home-nav">
            <NavLink to="/" tag={Link}>
              Home
            </NavLink>

          </li>
          <li class="home-nav">
            <NavLink to="/product" tag={Link}>
              Product
            </NavLink>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                More <i class="fas fa-chevron-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/Developer" tag={Link}>
                  <span>Developer</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </NavLink>
                <hr />
                <NavLink to="/blog" tag={Link}>
                  <span>Blog</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </NavLink>
                <hr />
                <NavLink to="/about" tag={Link}>
                  <span>About us</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </NavLink>
                <hr />
                <NavLink to="/Dashboard" tag={Link}>
                  <span>Dashboard</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </NavLink>
              </div>
            </div>
          </li>
          {!decoded && (
            <li>
              <NavLink
                to="/login"
                tag={Link}
              //activeStyle={{ fontWeight: "bold" }}
              //onMouseEnter={(event) => onMouseEnter(event)}
              //onMouseOut={(event) => onMouseOut(event)}
              >
                <button class="login-button">Login</button>
              </NavLink>
            </li>
          )}
          {decoded && (
            <li>
              <NavLink
                to="/logout"
                tag={Link}
              // activeStyle={{ fontWeight: 'bold' }}
              //onMouseEnter={(event) => onMouseEnter(event)}
              //onMouseOut={(event) => onMouseOut(event)}
              >
                <button class="login-button">Logout</button>
              </NavLink>
            </li>
          )}
          <li class="cart">
            <NavLink
              to="/cart"
              tag={Link}
            >
              <button class="cart-button">
                <i class="fas fa-cart-plus"></i>
              </button>
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}
/*
const onMouseEnter = (event) => {
    const el = event.target;
    el.style.color = "#ffc372";
};

const onMouseOut = (event) => {
    const el = event.target;
    el.style.color = "#000";
};
*/
