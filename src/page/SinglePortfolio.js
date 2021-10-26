import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import Nofound from './Nofound'
import Welcome from '../components/Welcome'
import '../components/editor.css'

export default function SinglePortfolio({ match }) {
  const id = match.params.url

  const [Page, setPage] = useState({})
  const [Loading, setLoading] = useState(true)
  const [errorpage, seterrorpage] = useState(false)

  useEffect(() => {
    axios
      .get(`/page/${id}`)
      .then(res => {
        setPage(res.data)
        console.log(res.data)
        !res.data && seterrorpage(true)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [id])
  console.log(Page)
  return (
    <div>
      {!Loading && errorpage && (
        <div>
          {' '}
          <Nofound />{' '}
        </div>
      )}
      {!Loading && !errorpage && (
        <div>
          <Nav />
          <Welcome
            title={Page.title}
            description={Page.descripition}
            button={Page.button}
            video={Page.videourl}
          />
          <div className="dashome">
            <div className="dashleft">
              <div className="singlepage">
                <div className="ck-content">{ReactHtmlParser(Page.body)}</div>
              </div>
            </div>
            <div className="dashright">
              <img src={Page.imgurl} alt={Page.title} width="100%" />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}
