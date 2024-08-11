import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./components/Home.jsx"
import Contact from './components/Contact.jsx'
import About from "./components/About.jsx"
import Feedback from './components/Feedback/Feedback.jsx'
import Project from './components/Project/Project.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/feedback",
        element: <Feedback />
      },{
        path: "/projects",
        element: <Project />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
