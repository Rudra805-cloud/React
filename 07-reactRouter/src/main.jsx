import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoder } from './components/Github/Github.jsx'

//M-1
//const router=createBrowserRouter([
// //here we put list of all objects that we want in this array
// {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path: "about",
//       element:<About/>
//     },
//     {
//       path:"ContactUs",
//       element:<ContactUs/>
//     }
//   ]
// }
// ])  

//m-2 this is prefered

const router=createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
       <Route  path='' element={<Home/>}/>
       <Route  path='about' element={<About/>}/>
       <Route  path='contactUs' element={<ContactUs/>}/>
       <Route  path='user/:userid' element={<User/>}/>
       <Route
       loader={githubInfoLoder}
       path='github' element={<Github/>}/>
       
    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
