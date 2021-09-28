import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import Dasnav from '../components/Dasnav'
import Footer from '../components/Footer'

export default function ManageBlog() {
  var token = localStorage.getItem('token')
  if (token) {
    var decoded = jwt_decode(token)
    // console.log(decoded)
  }
  if (decoded.user.email !== process.env.REACT_APP_ADMIN) {
    window.location.pathname = '/dashboard'
  }

  const [Blog, setBlog] = useState([])

  useEffect(() => {
    axios
      .get('/blog')
      .then(res => setBlog(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(Blog)

  const blogdelete = item => {
    var r = window.confirm('Press OK to delete.')
    if (r === true) {
      axios
        .delete(`/blog/${item}`, {
          headers: { token },
        })
        .then(res => {
          console.log(res.data)
          axios
            .get('/Blog')
            .then(res => setBlog(res.data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div>
      <Dasnav />
      <table>
        <tr>
          <th>Url</th>
          <th>title</th>
          <th>Tags</th>
          <th>Img</th>
          <th>Category</th>
          <th>Link</th>
        </tr>
        {Blog.map(item => {
          return (
            <tr key={item.url}>
              <td>{item.url.substring(0, 100)}</td>
              <td>{item.title.substring(0, 100)}.....</td>
              <td>{item.tags}</td>
              <td>
                <img src={item.imgurl} width="100px" alt="Blogs" />
              </td>
              <td>{item.category}</td>
              <td>
                <Link to={'/blog/' + item.url}>
                  <button style={{ margin: '0px' }}>
                    <i class="fas fa-glasses"></i>
                  </button>
                </Link>
                <Link to={'/edit_blog/' + item.url}>
                  <button style={{ margin: '0px' }}>
                    <i class="far fa-edit"></i>
                  </button>
                </Link>
                <button
                  onClick={() => blogdelete(item.url)}
                  style={{
                    margin: '0px',
                    backgroundColor: 'red',
                    color: 'white',
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          )
        })}
      </table>
      <Footer />
    </div>
  )
}
