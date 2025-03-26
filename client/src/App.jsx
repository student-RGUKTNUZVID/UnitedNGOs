import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/Navbar'
import HomePage from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import SearchUnite from './components/SearchAndUnite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
   
     
     <Routes>
    <Route path='/home' element={<HomePage/>}/> 
    <Route path='/login' element={<Login/>}/> 
    <Route path='/register' element={<Register/>}/> 
    <Route path='/search' element={<SearchUnite/>}/> 
     </Routes>

     
    </>
  )
}

export default App
