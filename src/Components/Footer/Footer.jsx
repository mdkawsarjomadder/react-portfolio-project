import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/footer_logo.svg'
import footerUserIcone from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
       <div className="footer-top-left">
       <img src={footerLogo} alt="" />
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, blanditiis.</p>
       </div>
       <div className="footer-top-right">
            <div className="footer-email-input">
                  <img src={footerUserIcone} alt="" />
                  <input type="email" placeholder='Enetr Your Email.' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
       </div>
      </div>
       <hr />
       <div className="footer-buttom">
            <p className="footer-buttom-left">
                  @ 2024 Alex Bennett. All The Rights Buttom
            </p>
            <div className="footer-buttom-right">
                  <p>Term of Services</p>
                  <p>Privacy Policy</p>
                  <p>Connect With Me</p>
            </div>
       </div>
    </div>
  )
}

export default Footer