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
            <NavLink
              to="/"
              tag={Link}
              //activeStyle={{ fontWeight: "bold" }}
              //onMouseEnter={(event) => onMouseEnter(event)}
              //onMouseOut={(event) => onMouseOut(event)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                More <i class="fas fa-chevron-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/product" tag={Link}>
                  <span>Products</span>
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
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                Service <i class="fas fa-chevron-down"></i>
              </button>
              <div class="dropdown-content">
                <NavLink to="/product" tag={Link}>
                  <span>Custom Website</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </NavLink>
                <hr />
                <NavLink to="/seo" tag={Link}>
                  <span>SEO</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </NavLink>
                <hr />
                <NavLink to="/Management" tag={Link}>
                  <span>Website Management</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </NavLink>
                <hr />
                <NavLink to="/paid" tag={Link}>
                  <span>Paid Marketing</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </NavLink>
                <hr />
                <NavLink to="/Media" tag={Link}>
                  <span>Social Media</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </NavLink>
                <hr />
                <NavLink to="/Content" tag={Link}>
                  <span>Content Writing</span>
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
              // activeStyle={{ fontWeight: "bold" }}
              //onMouseEnter={(event) => onMouseEnter(event)}
              //onMouseOut={(event) => onMouseOut(event)}
              /*
                          style={{
                              //backgroundColor: "#fff",
                              color: "black",
                              //border: "#075353 2px solid",
                              padding: "10px 15px",
                              margin: "10px",
                              borderRadius: "5px",
                          }}
                          */
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
