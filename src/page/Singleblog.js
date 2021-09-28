import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import '../components/editor.css'

export default function Singleblog({ match }) {
  const id = match.params.id

  const [blog, setblog] = useState({})

  useEffect(() => {
    axios
      .get(`/blog/${id}`)
      .then(res => setblog(res.data))
      .catch(err => console.log(err))
  }, [id])
  console.log(blog)
  return (
    <div>
      <Nav />
      <div className="dashome">
        <div className="dashleft">
          <div className="">
            <h1>{blog.title}</h1>
            <img style={{ width: '100%' }} src={blog.imgurl} alt="blog" />
            <div className="ck-content">{ReactHtmlParser(blog.body)}</div>
          </div>
        </div>
        <div className="dashright">
          <Lottie animationData={developer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
