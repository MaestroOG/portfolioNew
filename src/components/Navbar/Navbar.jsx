import React, { useRef } from 'react'
import './Navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right = "0"
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }

    return (
        <div id='navbar'>
            <h1>Portfolio.</h1>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#mywork">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-connect" onClick={() => window.location.href = '#contact'}>Connect with me</div>
        </div>
    )
}

export default Navbar
