import React, { useEffect } from 'react'

export default function Logout() {
  useEffect(() => {
    localStorage.clear('token')
    window.location.pathname = '/'
    return () => {
      localStorage.clear('token')
      window.location.pathname = '/'
    }
  }, [])

  return (
    <div>
      <h1>please wait</h1>
    </div>
  )
}
