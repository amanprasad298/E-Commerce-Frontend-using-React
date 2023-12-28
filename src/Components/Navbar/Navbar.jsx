import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setmenu] = useState("shop")
  return (
    <div>
      <div className='navbar'>
        <div className="nav-logo">
            <Link to='/' onClick={()=>{setmenu("shop")}}><img src={logo} alt="logo"/></Link>
            <p><Link to='/' onClick={()=>{setmenu("shop")}}>SHOPPER</Link></p>
        </div>
        <ui className="nav-menu">
            <li onClick={()=>{setmenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("men")}}><Link to='/men'>Men</Link> {menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("women")}}><Link to='/women'>Women</Link> {menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ui>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart-icon"/></Link>
            <div className="nav-cart-count">
                0
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar
