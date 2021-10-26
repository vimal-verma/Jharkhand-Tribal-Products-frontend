import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import '../components/editor.css'


export default function Singleproduct({ match }) {
  const id = match.params.id

  const [product, setproduct] = useState([])

  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then(res => setproduct(res.data))
      .catch(err => console.log(err))
  }, [id])
  console.log(product)

  const addCart = product => {
    console.log(product)
    var carts = localStorage.getItem('cart')
    if (carts) {
      delete product.description
      delete product.tags
      delete product.features
      delete product.updatedAt
      delete product.createdAt
      console.log(JSON.parse(carts))
      var jsoncart = JSON.parse(carts)
      const shouldAdd = jsoncart.every(item => {
        if (item.url === product.url) {
          return false
        }
        return true
      })
      console.log(shouldAdd)
      if (!shouldAdd) {
        window.location.pathname = '/cart'
      } else {
        jsoncart.push(product)
        localStorage.setItem('cart', JSON.stringify(jsoncart))
        window.location.pathname = '/cart'
      }
    } else {
      console.log('wtf')
      var cart = []
      delete product.description
      delete product.tags
      delete product.features
      delete product.updatedAt
      delete product.createdAt
      cart.push(product)
      console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
  return (
    <div>
      <Nav />
      <div className="dashome">
        <div className="dashleft">
          <div className="product-container">
            <h1>{product.name}</h1>
            <img style={{ width: '100%' }} src={product.imgurl} alt="product" />
            <p>{product.tags}</p>
            <div className="ck-content">
              {ReactHtmlParser(product.description)}
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#00000015',
            borderRadius: '10px',
            paddingBottom: '40px',
          }}
          className="dashright"
        >
          <div className="product-detail">
            <h3>$ {product.price}</h3>
            <p>Stock : {product.stock}</p>
            <Link to={product.demourl}>
              <button>
                {' '}
                Live Demo <i class="fas fa-arrow-right"></i>{' '}
              </button>
            </Link>
            <button
              onClick={() => {
                addCart(product)
              }}
            >
              {' '}
              Add to cart <i class="fas fa-arrow-right"></i>{' '}
            </button>
            <div className="ck-content">
              {ReactHtmlParser(product.features)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
