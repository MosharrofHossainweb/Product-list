import React from 'react'
import Navber from '../Navber'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navber/>
      <Outlet/>
    </>
  )
}

export default Layout
