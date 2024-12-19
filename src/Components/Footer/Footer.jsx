import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>Dedicated FullStack Developer with 6 months of internship experience at Besant Technologies and hands-on SQL, HTML5, CSS3, Bootstrap, JavaScript, ReactJs, Java and Springboot.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email'/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>@ 2024 Kabilan. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer