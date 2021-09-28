import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [blog, setblog] = useState([])

  useEffect(() => {
    axios
      .get('/blog')
      .then(res => setblog(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(blog)
  return (
    <div>
      <Nav />
      <div className="dashome">
        <div className="dashleft">
          {blog.map(item => {
            return (
              <div className="bloghome">
                <div className="blogleft">
                  <Link to={'/blog/' + item.url}>
                    <img
                      style={{ width: '100%' }}
                      src={item.imgurl}
                      alt="blog"
                    />
                  </Link>
                </div>
                <div className="blogright">
                  <h2>{item.title}</h2>
                  <Link to={'/blog/' + item.url}>
                    <button style={{ margin: '0px' }}>
                      Read More <i class="fas fa-glasses"></i>
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="dashright">
          <Lottie animationData={developer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
