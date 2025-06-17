import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import ParamComps from './components/ParamComps'
const router = createBrowserRouter(
  [
    {
      path : '/',
      element : 
        <div>
          <NavBar/>
          <Home/>
        </div>
    },
    {
      path : '/about',
      element : 
        <div>
          <NavBar/>
          <About/>
        </div>
    },
    {
      path : '/dashboard',
      element : 
        <div>
          <NavBar/>
          <Dashboard/>
        </div>
    },
    {
      path : '/student/:id',
      element : 
        <div>
          <NavBar/>
          <ParamComps/>
        </div>
    }
  ]
)
function App() {

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
