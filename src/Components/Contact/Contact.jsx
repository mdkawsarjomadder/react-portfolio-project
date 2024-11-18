import React from 'react'
import './Contact.css'
import contactImg from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

      const onSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
        
            formData.append("access_key", "3d3c2217-a338-4e75-aa59-06bafc1d936c");
        
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
        
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            }).then((res) => res.json());
        
            if (res.success) {
              alert('The Successfully Message');
            }
          };      

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
            <h1>Gat In Touch</h1>
            <img src={contactImg} alt="" />
      </div>
       <div className="contact-section">
            <div className="contact-left">
                  <h1>Let's Talk</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam, esse ea distinctio dicta quo hic sunt exercitationem doloribus ullam.</p>
            <div className="contact-details">
                  <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>kawsar@gmail.com</p>
                  </div>
                  <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+88017xxxxxxx</p>
                  </div>
                  <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Mirpur 1, dhaka 1202</p>

                  </div>
            </div>
            </div>
            <form onSubmit={onSubmit} className='contat-right'>
                  <label htmlFor="">Your Name</label>
                  <input type="text" placeholder='Enter Your Name' name='name' />
                  <label htmlFor="">Your Email</label>
                  <input type="email" placeholder='Enter Your Email' name='email' />
                  <label htmlFor="">Write your message here</label>
                  <textarea name="message" rows={8}  placeholder='Enter Your Message' id=""></textarea>
                  <button type='submit' className='submit-btn'>Submit Now</button>

            </form>
       </div>

    </div>
  )
}

export default Contact