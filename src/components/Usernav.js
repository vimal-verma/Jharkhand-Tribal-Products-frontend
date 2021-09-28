import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import ReactTooltip from 'react-tooltip'
import Nav from './Nav'

export default function Usernav() {
  return (
    <div>
      <ReactTooltip />
      <Nav />
      <div className="dasnav">
        <NavLink
          to="/dashboard"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Dashboard Overview" data-delay-show="400">
            {' '}
            Overview{' '}
          </button>
        </NavLink>
        <NavLink
          to="/order"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="manage your blog" data-delay-show="400">
            {' '}
            Order{' '}
          </button>
        </NavLink>
        <NavLink to="/cart" activeStyle={{ borderBottom: '3px solid #0d3895' }}>
          <button data-tip="Manage your product" data-delay-show="400">
            {' '}
            Cart{' '}
          </button>
        </NavLink>
        <NavLink
          to="/changepassword"
          activeStyle={{ borderBottom: '3px solid #0d3895' }}
        >
          <button data-tip="Manage your product" data-delay-show="400">
            {' '}
            Change_password{' '}
          </button>
        </NavLink>
      </div>
    </div>
  )
}
