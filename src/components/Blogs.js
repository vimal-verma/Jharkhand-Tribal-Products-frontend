import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Blogs() {
  const [Blog, setBlog] = useState([])

  useEffect(() => {
    axios
      .get('/Blog?limit=3')
      .then(res => setBlog(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(Blog)

  return (
    <div class="products">
      {Blog.map(item => {
        return (
          <div className="product">
            <Link to={'/Blog/' + item.url}>
              <img src={item.imgurl} alt="pro" />
            </Link>
            <h1>{item.name}</h1>
            <Link to={'/Blog/' + item.url}>
              <button style={{ margin: '0px' }}>
                Read more <i class="fas fa-arrow-right"></i>{' '}
              </button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
