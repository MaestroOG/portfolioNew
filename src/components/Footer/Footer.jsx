import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Portfolio.</h1>
                    <p>I'm a full-stack developer specializing in PERN stack (i.e., PostgreSQL, Express, React, and Node) Eager to build real-world projects.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    &copy; {new Date().getFullYear()} Muneeb Ur Rehman. All Rights Reserved.
                </div>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer