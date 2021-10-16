import Nav from '../components/Usernav'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Order() {
  var token = localStorage.getItem('token')

  const [Order, setOrder] = useState([])

  useEffect(() => {
    axios
      .get('/order/user', {
        headers: { token },
      })
      .then(res => setOrder(res.data))
      .catch(err => console.log(err))
  }, [token])
  console.log(Order)
  return (
    <div>
      <Nav />
      <table>
        <tr>
          <th>tras_id</th>
          <th>product</th>
          <th>price</th>
          <th>status</th>
          <th>email_address</th>
          <th>create_time</th>
          <th>Link</th>
        </tr>
        {Order.map(item => {
          return (
            <tr key={item._id}>
              <td>{item.tras_id}</td>
              <td>{item.product.length}</td>
              <td>{item.price}</td>
              <td>{item.status}</td>
              <td>{item.email_address}</td>
              <td>{item.create_time}</td>
              <td>
                <Link to={'/receipt/' + item._id}>
                  <button style={{ margin: '0px', color: 'white' }}>
                    <i class="fas fa-file-invoice-dollar"></i>
                  </button>
                </Link>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
