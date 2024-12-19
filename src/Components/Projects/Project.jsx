import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Project = () => {
  return (
    <div id='projects' className='project'>
        <div className="project-tittle">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="project-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="project-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="project-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Project