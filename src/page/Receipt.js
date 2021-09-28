import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Receipt({ match }) {
  const id = match.params.id

  const [order, setorder] = useState({})
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`/order/id/${id}`)
      .then(res => {
        setorder(res.data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [id])
  console.log(order)
  return (
    <div>
      <Nav />
      <div className="dashome">
        <div className="dashleft">
          {!Loading && (
            <div className="">
              <h1>Order id : {order._id}</h1>
              <h1>Order price : {order.price}</h1>
              <h1>Order currency_code : {order.currency_code}</h1>
              <h1>Total Products : {order.product.length}</h1>
              <h1>Order emails : {order.email_address}</h1>
              <h1>Order time : {order.create_time}</h1>
              <h1>Order tras_id : {order.tras_id}</h1>
              <div class="products">
                {order.product.map(item => {
                  return (
                    <div className="product">
                      <Link to={'/product/' + item.url}>
                        <img src={item.imgurl} alt="pro" />
                      </Link>
                      <h1>{item.name}</h1>
                      <Link to={'/product/' + item.url}>
                        <button style={{ margin: '0px' }}>
                          Know more <i class="fas fa-arrow-right"></i>{' '}
                        </button>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
        <div className="dashright">
          <Lottie animationData={developer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
