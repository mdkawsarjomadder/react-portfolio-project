import React from 'react'
import './Hero.css'
import profileImg from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profileImg} title='profile Img'/>
      <h1><span>I'm Alex Benner,</span> Frontend developer Based Is USA..</h1>
      <p>Rerum consequuntur asperiores autem aliquam architecto deleniti adipisci harum! Quam, vero necessitatibus.</p>
     <div className="hero-action">
   <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div> 
      <div className="hero-resume">My Resume</div>
     </div>
    </div>
  )
}

export default Hero

           