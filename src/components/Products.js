import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Products(props) {
  const [Product, setProduct] = useState([])

  useEffect(() => {
    axios
      .get(`/Product?limit=${props.limit}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [props.limit])
  console.log(Product)

  return (
    <div class="products">
      {Product.map(item => {
        return (
          <div className="product">
            <div className="product-image">
              <Link to={'/product/' + item.url}>
                <img src={item.imgurl} alt="pro" />
              </Link>
            </div>
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
  )
}
