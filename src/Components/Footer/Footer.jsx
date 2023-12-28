import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import ins from '../Assets/instagram_icon.png'
import pint from '../Assets/pintester_icon.png'
import whats from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerlogo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
            <img src={ins} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pint} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whats} alt="" />
        </div>
      </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer
