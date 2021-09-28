import Nav from '../components/Dasnav'
import Footer from '../components/Footer'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import 'react-notifications/lib/notifications.css'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'

export default function Addblog() {
  var token = localStorage.getItem('token')
  if (token) {
    var decoded = jwt_decode(token)
    // console.log(decoded)
  }
  if (decoded.user.email !== process.env.REACT_APP_ADMIN) {
    window.location.pathname = '/dashboard'
  }

  const [Blog, setBlog] = useState({})

  const createNotification = info => {
    NotificationManager.success('Blog added', 'Update Success')
  }
  const createNotificationerror = info => {
    NotificationManager.error(info, 'Error')
  }

  const handleSubmit = e => {
    e.preventDefault()

    // https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
    var letters = `^(?=.{3,500}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`
    if (Blog.url.match(letters)) {
      axios
        .post('/blog', Blog, {
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
          <h1>Add new blog</h1>
          <form onSubmit={handleSubmit}>
            <p>Title</p>
            <input
              placeholder="Title"
              type="text"
              name="title"
              onChange={e => setBlog({ ...Blog, title: e.target.value })}
              value={Blog.title}
              required
            />
            <p>body</p>
            <div style={{ width: '80%', margin: 'auto' }}>
              <CKEditor
                editor={ClassicEditor}
                data={Blog.body}
                config={{
                  ckfinder: {
                    uploadUrl: `${process.env.REACT_APP_API_URL}/upload`,
                    withCredentials: true,
                  },
                }}
                onChange={(e, editor) => {
                  const data = editor.getData()
                  setBlog({ ...Blog, body: data })
                }}
              />
            </div>
            <p>url</p>
            <input
              placeholder="url"
              type="text"
              name="url"
              onChange={e => setBlog({ ...Blog, url: e.target.value })}
              value={Blog.url}
              required
            />
            <p>Tags</p>
            <input
              placeholder="Tags"
              type="text"
              name="tags"
              onChange={e => setBlog({ ...Blog, tags: e.target.value })}
              value={Blog.tags}
              required
            />
            <p>Category</p>
            <input
              placeholder="Category"
              type="text"
              name="category"
              onChange={e => setBlog({ ...Blog, category: e.target.value })}
              value={Blog.category}
              required
            />
            <p>imgurl</p>
            <input
              placeholder="imgurl"
              type="url"
              name="imgurl"
              onChange={e => setBlog({ ...Blog, imgurl: e.target.value })}
              value={Blog.imgurl}
              required
            />
            <button type="submit">Add</button>
          </form>
          {/* {Blog.body} */}
        </div>
        <div className="dashright">
          <Lottie animationData={developer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
