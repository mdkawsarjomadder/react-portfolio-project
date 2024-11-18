import React from 'react'
import './Service.css'
import servicsImg from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrowIcon from '../../assets/arrow_icon.svg'

const Service = () => {
  return (
    <div id='services' className='service'>
      <div className="service-title">
            <h1>My Services</h1>
            <img src={servicsImg} alt="" />
      </div>
      
      <div className="service-container">
        {Services_Data.map((servic, index) =>{
         return <div key={index} className='service-format' >
            <h3>{servic.s_no}</h3>
            <h2>{servic.s_name}</h2>
            <p>{servic.s_desc}</p>
            <div className="services-readmore">
                  <p>Read More</p>
                  <img src={arrowIcon} alt="" />
            </div>
         </div>
        } )}
      </div>
    </div>
  )
}

export default Service