import Nav from '../components/Dasnav'
import Footer from '../components/Footer'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import 'react-notifications/lib/notifications.css'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'

export default function AddPage() {
  var token = localStorage.getItem('token')


  const [Page, setPage] = useState({})

  const createNotification = info => {
    NotificationManager.success('Page added', 'Update Success')
  }
  const createNotificationerror = info => {
    NotificationManager.error(info, 'Error')
  }

  const handleSubmit = e => {
    e.preventDefault()

    // https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
    var letters = `^(?=.{3,500}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`
    if (Page.url.match(letters)) {
      axios
        .post('/Page', Page, {
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
          <h1>Add new Page</h1>
          <form onSubmit={handleSubmit}>
            <p>Type</p>
            <select
              style={{ width: '80%', padding: '7px' }}
              name="category"
              onChange={e => setPage({ ...Page, type: e.target.value })}
              value={Page.type}
              required
            >
              <option value="" selected disabled>
                Select
              </option>
              <option value="service">Service</option>
              <option value="portfolio">Portfolio</option>
              <option value="other">Other</option>
            </select>
            <p>Title</p>
            <input
              placeholder="Title"
              type="text"
              name="title"
              onChange={e => setPage({ ...Page, title: e.target.value })}
              value={Page.title}
              required
            />
            <p>Description</p>
            <input
              placeholder="Description"
              type="text"
              name="description"
              onChange={e => setPage({ ...Page, descripition: e.target.value })}
              value={Page.descripition}
              required
            />
            <p>Button Text</p>
            <input
              placeholder="Button Text"
              type="text"
              name="button"
              onChange={e => setPage({ ...Page, button: e.target.value })}
              value={Page.button}
              required
            />
            <p>Video Url</p>
            <input
              placeholder="Video Url"
              type="url"
              name="videourl"
              onChange={e => setPage({ ...Page, videourl: e.target.value })}
              value={Page.videourl}
              required
            />
            <p>body</p>
            <div style={{ width: '80%', margin: 'auto' }}>
              <CKEditor
                editor={ClassicEditor}
                data={Page.body}
                config={{
                  ckfinder: {
                    uploadUrl: `${process.env.REACT_APP_API_URL}/upload`,
                    withCredentials: true,
                  },
                }}
                onChange={(e, editor) => {
                  const data = editor.getData()
                  setPage({ ...Page, body: data })
                }}
              />
            </div>
            <p>url</p>
            <input
              placeholder="url"
              type="text"
              name="url"
              onChange={e => setPage({ ...Page, url: e.target.value })}
              value={Page.url}
              required
            />
            <p>Tags</p>
            <input
              placeholder="Tags"
              type="text"
              name="tags"
              onChange={e => setPage({ ...Page, tags: e.target.value })}
              value={Page.tags}
              required
            />
            <p>imgurl</p>
            <input
              placeholder="imgurl"
              type="url"
              name="imgurl"
              onChange={e => setPage({ ...Page, imgurl: e.target.value })}
              value={Page.imgurl}
              required
            />
            <button type="submit">Add</button>
          </form>
          {/* {ReactHtmlParser(Page.body)} */}
        </div>
        <div className="dashright">
          <Lottie animationData={developer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
