import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'  
/*Outlet use layout as a base and where we use this is chanage
like we want to fix header and footer so we write that
 return (
    <>
    <Header/>
    <footer/>
    </>
 and we want ti cahnge body part than
  return (
    <>
    <Header/>
    <Outlet/> ye change hoga 
    <footer/>
    </>


*/
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout