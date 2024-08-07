// import React from 'react'
// import login_icon from "./assets/login.svg"
// import sign_icon from './assets/sign.svg'
import home_icon from 'H:/React Project/Project/vite-project/src/assets/home_icon.svg'
import about_icon from 'H:/React Project/Project/vite-project/src/assets/about.svg'
import call_icon from 'H:/React Project/Project/vite-project/src/assets/call.svg'
// import Home from "./Home"
// import Contacts from "./components/Contacts"
import {useNavigate} from 'react-router-dom'
import logo from "H:/React Project/Project/vite-project/src/assets/logo123.png"
import cart from "H:/React Project/Project/vite-project/src/assets/cart.svg"
import './Navbar.css'
const Navbar = () => {
  const navigate=useNavigate()

  const handleClick=()=>{
    navigate('/Home')
     }
     const handleClick1=()=>{
      navigate('/Contacts')
    }
    const handleClick2=()=>{
      navigate('/About')
    }
    const handleClick3=()=>{
      navigate('/cart')
    }
    
  return (
    <div className='div'>
      <nav className='nav'>
        <ul>
         
        <li><button className="b1" onClick={handleClick}>
          <img src={home_icon} alt="" className="navimg" />Home</button></li>     
          <li><button className="b1" onClick={handleClick1}>
            <img src={call_icon} alt="" className='navimg'/>Contact us</button></li>
          <li><button className="b1" onClick={handleClick2}>
          <img src={about_icon} className='navimg' />About us</button></li>
          <li><button className="b1" onClick={handleClick3}>
          <img src={cart} className='navimg' />Cart</button></li>
          <img src={logo} alt="" className='lgo'/>
        </ul>
      </nav>
      </div>
      
  )
}

export default Navbar

