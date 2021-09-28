import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import ReactTooltip from 'react-tooltip'
import Nav from './Nav'

export default function Dasnav() {
  return (
    <div>
      <ReactTooltip />
      <Nav />
      <div className="dasnav">
        <NavLink
          to="/Admin"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Dashboard Overview" data-delay-show="400">
            {' '}
            Overview{' '}
          </button>
        </NavLink>
        <NavLink
          to="/orders"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Order Overview" data-delay-show="400">
            {' '}
            Orders{' '}
          </button>
        </NavLink>
        <NavLink
          to="/Manage_Blog"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="manage your blog" data-delay-show="400">
            {' '}
            Manage_Blog{' '}
          </button>
        </NavLink>
        <NavLink
          to="/Manage_Products"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Manage your product" data-delay-show="400">
            {' '}
            Manage_Products{' '}
          </button>
        </NavLink>
        <NavLink
          to="/Manage_Page"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Manage your product" data-delay-show="400">
            {' '}
            Manage_Page{' '}
          </button>
        </NavLink>
        <NavLink
          to="/Manage_Admin"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Manage your admin" data-delay-show="400">
            {' '}
            Manage_Admin{' '}
          </button>
        </NavLink>
        <NavLink
          to="/add_blog"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="add your blog" data-delay-show="400">
            {' '}
            Add_blog{' '}
          </button>
        </NavLink>
        <NavLink
          to="/add_product"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Add your Projects" data-delay-show="400">
            {' '}
            Add_Product{' '}
          </button>
        </NavLink>
        <NavLink
          to="/add_page"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Add your Projects" data-delay-show="400">
            {' '}
            Add_Page{' '}
          </button>
        </NavLink>
        <NavLink
          to="/image"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Add your Projects" data-delay-show="400">
            {' '}
            Image{' '}
          </button>
        </NavLink>
        <NavLink
          to="/message"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Manage your Message" data-delay-show="400">
            {' '}
            Message{' '}
          </button>
        </NavLink>
      </div>
    </div>
  )
}
