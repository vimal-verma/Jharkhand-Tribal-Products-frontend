import Nav from '../components/Dasnav'
import Footer from '../components/Footer'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import 'react-notifications/lib/notifications.css'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'

export default function AddProduct() {
  var token = localStorage.getItem('token')
  if (token) {
    var decoded = jwt_decode(token)
    // console.log(decoded)
  }
  if (decoded.user.email !== process.env.REACT_APP_ADMIN) {
    window.location.pathname = '/dashboard'
  }

  const [Product, setProduct] = useState({})

  const createNotification = info => {
    NotificationManager.success('Product added', 'Update Success')
  }
  const createNotificationerror = info => {
    NotificationManager.error(info, 'Error')
  }

  const handleSubmit = e => {
    e.preventDefault()
    // https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
    var letters = `^(?=.{3,500}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`
    if (Product.url.match(letters)) {
      axios
        .post('/product', Product, {
          headers: { token },
        })
        .then(res => {
          // console.log(res)
          createNotification()
        })
        .catch(err => {
          console.log(err.response.data)
          createNotificationerror(err.response.data)
        })
    } else {
      createNotificationerror(
        'Url can only use letters, numbers, underscores and periods.'
      )
    }
  }
  return (
    <div>
      <Nav />
      <NotificationContainer />
      <div className="dashome">
        <div className="dashleft">
          <h1>Add new Product</h1>
          <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={e => setProduct({ ...Product, name: e.target.value })}
              value={Product.name}
              required
            />
            <p>Price</p>
            <input
              placeholder="price"
              type="number"
              name="price"
              onChange={e => setProduct({ ...Product, price: e.target.value })}
              value={Product.price}
              required
            />
            <p>stock</p>
            <input
              placeholder="stock"
              type="number"
              name="stock"
              onChange={e => setProduct({ ...Product, stock: e.target.value })}
              value={Product.stock}
              required
            />
            <p>Demo Url</p>
            <input
              placeholder="demourl"
              type="url"
              name="demourl"
              onChange={e =>
                setProduct({ ...Product, demourl: e.target.value })
              }
              value={Product.demourl}
              required
            />
            <p>url</p>
            <input
              placeholder="url"
              type="text"
              name="url"
              onChange={e => setProduct({ ...Product, url: e.target.value })}
              value={Product.url}
              required
            />
            <p>Tags</p>
            <input
              placeholder="Tags"
              type="text"
              name="tags"
              onChange={e => setProduct({ ...Product, tags: e.target.value })}
              value={Product.tags}
              required
            />
            <p>Features</p>
            <div style={{ width: '80%', margin: 'auto' }}>
              <CKEditor
                editor={ClassicEditor}
                data={Product.features}
                config={{
                  ckfinder: {
                    uploadUrl: `${process.env.REACT_APP_API_URL}/upload`,
                    withCredentials: true,
                  },
                }}
                onChange={(e, editor) => {
                  const data = editor.getData()
                  setProduct({ ...Product, features: data })
                }}
              />
            </div>
            <p>Description</p>
            <div style={{ width: '80%', margin: 'auto' }}>
              <CKEditor
                editor={ClassicEditor}
                data={Product.description}
                config={{
                  ckfinder: {
                    uploadUrl: `${process.env.REACT_APP_API_URL}/upload`,
                    withCredentials: true,
                  },
                }}
                onChange={(e, editor) => {
                  const data = editor.getData()
                  setProduct({ ...Product, description: data })
                }}
              />
            </div>
            <p>imgurl</p>
            <input
              placeholder="imgurl"
              type="url"
              name="imgurl"
              onChange={e => setProduct({ ...Product, imgurl: e.target.value })}
              value={Product.imgurl}
              required
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="dashright">
          <Lottie animationData={developer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
