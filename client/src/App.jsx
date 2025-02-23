import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/Navbar'
import HomePage from './components/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomePage/>
    </>
  )
}

export default App
