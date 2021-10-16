import Nav from '../components/Dasnav'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Orders() {
  var token = localStorage.getItem('token')

  const [Order, setOrder] = useState([])

  useEffect(() => {
    axios
      .get('/order', {
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
                {item.product.map(item => {
                  return (
                    <tr>
                      <Link to={'/product/' + item.url}>
                        <button style={{ margin: '0px' }}>{item.url}</button>
                      </Link>
                    </tr>
                  )
                })}
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
