import React from 'react'
import './Service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import s_data from '../../assets/services_data'

const Service = () => {
    return (
        <div id='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {s_data.map((service, index) => (
                    <div className="services-format" key={index}>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-read-more">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service