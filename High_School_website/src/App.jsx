import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)
  const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup')

  return (
    <>
     { noHeaderFooter || <Header></Header>}
      <Outlet></Outlet>
     {noHeaderFooter || <Footer></Footer>}
     
    </>
  )
}

export default App
