import React, { useEffect, useState } from 'react'

import Nav from '../components/Usernav'
import PayPal from '../components/Paypal'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Coupan from "./Coupan";


export default function Cart() {
  const [Cart, setCart] = useState([])

  var carts = localStorage.getItem('cart')
  useEffect(() => {
    if (carts) {
      var item = JSON.parse(carts)
      setCart(item)
      var ids = item.map(item => {
        return item._id
      })
      axios.post('/order/carts', ids).then(resitem => {
        console.log(resitem.data)
        function comparer(otherArray) {
          return function (current) {
            return (
              otherArray.filter(function (other) {
                return (
                  other._id === current._id && other.price === current.price
                )
              }).length === 0
            )
          }
        }
        var falseInCarts = item.filter(comparer(resitem.data))
        console.log(falseInCarts)
        falseInCarts.forEach(element => {
          console.log('it runs')
          var newcart = item.filter(ritem => ritem.url !== element.url)
          console.log(newcart)
          setCart(newcart)
          localStorage.setItem('cart', JSON.stringify(newcart))
        })
      })
    }
  }, [carts])
  console.log(Cart)

  const removeItem = itemurl => {
    var r = window.confirm('Press OK to delete.')
    if (r === true) {
      var newcart = Cart.filter(item => item.url !== itemurl)
      setCart(newcart)
      localStorage.setItem('cart', JSON.stringify(newcart))
    }
  }


  return (
    <div>
      <Nav />
      <div className="dashome">
        <div className="dashleft">
          <h2>Your Cart</h2>
          <Coupan />
          <div class="products">
            {Cart.map(item => {
              return (
                <div key={item.url} className="product">
                  <Link to={'/product/' + item.url}>
                    <img src={item.imgurl} alt="pro" />
                  </Link>
                  <h1>{item.name}</h1>
                  <p>${item.price}</p>
                  <Link to={'/product/' + item.url}>
                    <button>
                      <i class="fas fa-glasses"></i>{' '}
                    </button>
                  </Link>
                  <button
                    onClick={() => removeItem(item.url)}
                    style={{ backgroundColor: 'red', color: 'white' }}
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              )
            })}
            {Cart.length < 1 && (
              <div>
                <h1>Your cart is empaty</h1>

                <div>
                
               

                </div>
              </div>
            )}
          </div>
        </div>
        <div className="dashright">
          <PayPal cart={Cart} />
        </div>
      </div>
    </div>

   
    
  )

}
