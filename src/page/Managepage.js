import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Dasnav from '../components/Dasnav'
import Footer from '../components/Footer'

export default function ManagePage() {
  var token = localStorage.getItem('token')

  const [Page, setPage] = useState([])

  useEffect(() => {
    axios
      .get('/Page')
      .then(res => setPage(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(Page)

  const pagedelete = item => {
    var r = window.confirm('Press OK to delete.')
    if (r === true) {
      axios
        .delete(`/page/${item}`, {
          headers: { token },
        })
        .then(res => {
          console.log(res.data)
          axios
            .get('/Page')
            .then(res => setPage(res.data))
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
          <th>Link</th>
        </tr>
        {Page.map(item => {
          return (
            <tr key={item.url}>
              <td>{item.url.substring(0, 100)}</td>
              <td>{item.title.substring(0, 100)}.....</td>
              <td>{item.tags}</td>
              <td>
                <img src={item.imgurl} width="100px" alt="Pages" />
              </td>
              <td>{item.category}</td>
              <td>
                <Link to={'/' + item.url}>
                  <button style={{ margin: '0px' }}>
                    <i class="fas fa-glasses"></i>
                  </button>
                </Link>
                <Link to={'/edit_page/' + item.url}>
                  <button style={{ margin: '0px' }}>
                    <i class="far fa-edit"></i>
                  </button>
                </Link>
                <button
                  onClick={() => pagedelete(item.url)}
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
