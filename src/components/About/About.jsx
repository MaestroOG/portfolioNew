import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_img.jpg'

const About = () => {
    return (
        <div id='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a seasoned full-stack developer specializing in the PERN stack - PostgreSQL, Express.js, React.js, and
                            Node.js - Eager to get a hands-on experience and a passion for crafting robust web applications.</p>
                        <p>My track
                            record includes development of dynamic platforms, optimizing database performance, and leveraging
                            cutting-edge technologies to deliver seamless UX. With a keen eye for detail, exceptional problem-solving
                            skills, and a collaborative mindset, I thrive in fast-paced environments where innovation and excellence are
                            paramount.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>React & Vanilla JS</p>
                            <hr />
                        </div>
                        <div className="about-skill">
                            <p>Express.js</p>
                            <hr />
                        </div>
                        <div className="about-skill">
                            <p>Node.js</p>
                            <hr />
                        </div>
                        <div className="about-skill">
                            <p>PostgreSQL</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    )
}

export default About