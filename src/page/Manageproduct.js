import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Dasnav from '../components/Dasnav'
import Footer from '../components/Footer'

export default function ManageProducts() {
  var token = localStorage.getItem('token')

  const [Product, setProduct] = useState([])

  useEffect(() => {
    axios
      .get('/Product')
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(Product)

  const productdelete = item => {
    var r = window.confirm('Press OK to delete.')
    if (r === true) {
      axios
        .delete(`/product/${item}`, {
          headers: { token },
        })
        .then(res => {
          console.log(res.data)
          axios
            .get('/Product')
            .then(res => setProduct(res.data))
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
          <th>Name</th>
          <th>price</th>
          <th>Tags</th>
          <th>Img</th>
          <th>Link</th>
        </tr>
        {Product.map(item => {
          return (
            <tr key={item.url}>
              <td>{item.url}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.tags}</td>
              <td>
                <img src={item.imgurl} width="100px" alt="products" />
              </td>
              <td>
                <Link to={'/product/' + item.url}>
                  <button style={{ margin: '0px' }}>
                    <i class="fas fa-glasses"></i>
                  </button>
                </Link>
                <Link to={'/edit_product/' + item.url}>
                  <button style={{ margin: '0px' }}>
                    <i class="far fa-edit"></i>
                  </button>
                </Link>
                <button
                  onClick={() => productdelete(item.url)}
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
