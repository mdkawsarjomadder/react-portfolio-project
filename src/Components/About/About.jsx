import React from 'react'
import './About.css'
import themePattern from '../../assets/theme_pattern.svg'
import aboutImg from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
            <h1>About Me</h1>
            <img src={themePattern} alt="" />
      </div>

      <div className="about-section">
            <div className="about-left">
                  <img src={aboutImg} alt="" />
            </div>
            
            <div className="about-right">
                  <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores maiores fugit vero? eos!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil quam quidem, iste ipsum atque!</p>
                  </div>
                  <div className="abouts-skills">
                        <div className="about-skill" > <p>HTML5 & CSS</p> <hr style={{width:"50%"}} /> </div>
                        <div className="about-skill" > <p>React Js</p> <hr style={{width:"70%"}} /> </div>
                        <div className="about-skill" > <p>Javascript</p> <hr style={{width:"60%"}} /> </div>
                        <div className="about-skill" > <p>Nest Js</p> <hr style={{width:"50%"}} /> </div>
                  </div>
            </div>
      </div>
      <div className="about-achievements">
            <div className="about-achievement">
                  <h1>10+</h1>
                  <p>year of experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                  <h1>90+</h1>
                  <p>project completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                  <h1>15+</h1>
                  <p>happy clients</p>
            </div>
      </div>
    </div>
  )
}

export default About