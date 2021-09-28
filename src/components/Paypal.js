import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM })

export default function Paypal(props) {
  var token = localStorage.getItem('token')
  if (token) {
    var decoded = jwt_decode(token)
    // console.log(decoded)
  }

  const [Price, setPrice] = useState(0)
  const [Item, setItem] = useState([])

  const createNotification = info => {
    NotificationManager.success('Thanks for Order', 'Order Success')
  }
  const createNotificationerror = info => {
    NotificationManager.error(info, 'Error')
  }

  var Cart = props.cart
  useEffect(() => {
    var price = Cart.reduce((a, { price }) => {
      return +a + +price
    }, 0)
    setPrice(price)
    var item = Cart.map(item => {
      return {
        name: item.url,
        description: item.name,
        unit_amount: {
          currency_code: 'USD',
          value: item.price,
        },
        sku: item._id,
        quantity: '1',
      }
    })
    setItem(item)
  }, [Cart])

  console.log(Item)

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: 'Some description',
          soft_descriptor: 'Great description 1',
          amount: {
            currency_code: 'USD',
            value: Price,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: Price,
              },
            },
          },
          items: Item,
        },
      ],
    })
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then(details => {
      // Show a success message to your buyer
      console.log(details)
      axios
        .post('/order', details, {
          headers: { token },
        })
        .then(res => {
          console.log(res)
          createNotification()
        })
        .catch(err => [console.log(err), createNotificationerror(err.message)])
    })
  }

  return (
    <div>
      <NotificationContainer />
      <p>Total Value : ${Price}</p>
      {decoded && (
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      )}
      {!decoded && (
        <div>
          <Link to="/login">
            <button>
              Login <i class="fas fa-arrow-right"></i>
            </button>
          </Link>
          <Link to="/register">
            <button>
              Register <i class="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
