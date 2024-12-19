import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-tittle">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img  className='pic' src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Dedicated FullStack Developer with 6 months of internship experience at Besant Technologies and hands-on SQL, HTML5, CSS3, Bootstrap, JavaScript, ReactJs, Java and Springboot.</p>
                    <p>Eager to contribute to dynamic projects and expand skill set within collaborative teams.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>6+</h1>
                <p>MONTH OF INTERNSHIP</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About