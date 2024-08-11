import { useState } from 'react'
import './App.css'
import  Footer  from "./components/Footer.jsx"
import  Header  from "./components/Header.jsx"
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
