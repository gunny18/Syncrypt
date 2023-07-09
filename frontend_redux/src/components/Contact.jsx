import React from 'react'
import Map from './images/map.png'
import social_media from './images/social_media.png'
import "./Contact.css"

const Contact = () => {
  return (
    
        <section>
        <div className="contact_pg"> 
            <img src={Map} alt="" className='map_img'></img>
            <section className="contact_form_container">
            <form className="contact__form" >

                    <h1 className='msg_title'>SEND US A MESSAGE</h1>
                    <div>
                    {/* <label htmlFor="username">Username</label> */}
                    <input className='contents_form'
                        type="email"
                        name="mail"
                        id="mail_id"
                        placeholder="Email"
                        autoComplete="off"

                    />
                    </div>
                    <div>
                    {/* <label htmlFor="pwd">Password</label> */}
                    <input className='contents_form'
                        type="user_name"
                        name="username"
                        id="user_id"
                        placeholder="Name"
                    />
                    </div>
                    <div>
                    <input className='contents_form'
                        type="phNo"
                        name="Ph_no"
                        id="Phone"
                        placeholder="Phone Number"
                    />
                    </div>

                    <div>
                    <input className='contents_form'
                        type="msg"
                        name="msg_to_sent"
                        id="message"
                        placeholder="Message"
                    />
                    </div>
                    <button className="send_msg_button">
                        SEND MESSAGE 
                    </button>
                </form>
                </section>
            <h1 className='contact_us_head'>Contact Us</h1>
        </div>
        
        <div className='contact_info'>
        <div className='team_names'> 
                <h1 className='bold_head'>Our Team</h1> 
                    
                    <ul><small>Ganeshswaminathan R</small></ul>  
                    <ul><small>Karan J</small></ul>
                    <ul><small>Hemanth M E</small></ul>
                    <ul><small>Karthik</small></ul>
        </div>            
            <div className='location'>
                <h1 className='bold_head'>Location</h1>
                <ul><small>Bengaluru, Karnataka</small></ul>
            </div>

            <div className='contact_mail'>
                <h1 className='bold_head'>Contact</h1>
               <ul> <small>syncrypt.tech@gmail.com</small></ul>
            </div>

            <div className='social'>
                <img className="social_media_links" src={social_media} alt=''></img>
                 <h1>-Follow Us</h1>
            </div>
        </div>
        </section>

        
  )
}

export default Contact