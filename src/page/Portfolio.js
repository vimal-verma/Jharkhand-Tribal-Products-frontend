import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'

export default function Portfolio() {
  const [Page, setPage] = useState([])

  useEffect(() => {
    axios
      .get(`/page?type=portfolio`)
      .then(res => setPage(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(Page)
  return (
    <div>
      <Nav />
      <div class="products">
        {Page.map(item => {
          return (
            <div className="product">
              <div className="product-image">
                <Link to={'/product/' + item.url}>
                  <img src={item.imgurl} alt="pro" />
                </Link>
              </div>
              <h1>{item.name}</h1>
              <Link to={'/portfolio/' + item.url}>
                <button style={{ margin: '0px' }}>
                  Know more <i class="fas fa-arrow-right"></i>{' '}
                </button>
              </Link>
            </div>
          )
        })}
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
