import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
    return (
        <div id='hero'>
            <img src={profile_img} alt="" />
            <h1><span>Hi there,</span> I'm Muneeb-Ur-Rehman. A Full-Stack Developer based in Faisalabad, PK.</h1>
            <p>I'm a full-stack developer specializing in PERN stack (i.e., PostgreSQL, Express, React, and Node) <strong>Eager</strong> to build real-world projects.</p>
            <div className="hero-action">
                <div className="hero-connect" onClick={() => window.location.href = '#contact'}>Connect with Me</div>
                <div className="hero-resume" onClick={() => window.location.href = 'https://drive.google.com/file/d/1bKUSk1bObj_BwJxPnHigIjw1tknaEEOD/view?usp=sharing'}><a target='_blank'>My Resume</a></div>
            </div>
        </div>
    )
}

export default Hero