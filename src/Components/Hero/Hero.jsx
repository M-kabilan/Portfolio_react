import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-img.png'
import Resume from '../../assets/Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Kabilan,</span> Full stack developer.</h1>
        <p>As a highly motivated and results-driven Full Stack Developer, I aim to leverage my strong expertise in front-end and back-end technologies to create dynamic, user-friendly, and scalable web applications. With hands-on experience in Java, HTML, CSS, JavaScript, Reactjs, SpringBoot and databases like MySQL..</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume"><a href={Resume} target='_blank'>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero