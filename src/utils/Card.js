import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

export default function Card(props) {
  const Clickevent = () => {
    console.log('clicked')
    document.getElementById('root').classList.remove('godown')
    document.getElementById('card').style.display = 'none'
  }
  useEffect(() => {
    AOS.init()
    AOS.refresh()
    setTimeout(() => {
      document.getElementById('root').classList.add('godown')
    }, 1000)
    return () => {
      document.getElementById('root').classList.remove('godown')
    }
  }, [])
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-delay="750"
      data-aos-duration="750"
      id="card"
      className="card"
    >
      <Link to={props.linkto}>
        <p>{props.text}</p>
      </Link>
      <button onClick={Clickevent} className="x">
        X
      </button>
    </div>
  )
}
