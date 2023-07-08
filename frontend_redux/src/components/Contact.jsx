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

                    <h1>Enter Your Credentials</h1>
                    <div>
                    {/* <label htmlFor="username">Username</label> */}
                    <input
                        type="email"
                        name="mail"
                        id="mail_id"
                        placeholder="Email"
                        autoComplete="off"

                    />
                    </div>
                    <div>
                    {/* <label htmlFor="pwd">Password</label> */}
                    <input
                        type="user_name"
                        name="username"
                        id="user_id"
                        placeholder="Name"
                    />
                    </div>
                    <textarea
                        className="msg_txt_area"
                        name="msg_description"
                        id="msg_desc"
                        cols="30"
                        rows="10"
                    />
                    <button>Submit</button>
                </form>
                </section>
            <h1 className='contact_us_head'>Contact Us</h1>
        </div>
        
        <div className='contact_info'>
        <div className='team_names'> 
                <h1 className='bold_head'>Our Team</h1> 
                    
                    <ul><small>Ganeshswaminathan R</small></ul>  
                    <ul><small>Karan</small></ul>
                    <ul><small>Hemanth</small></ul>
                    <ul><small>Karthik</small></ul>
        </div>            
            <div className='location'>
                <h1 className='bold_head'>Location</h1>
                <ul><small>Bengaluru, Karnataka</small></ul>
            </div>

            <div className='contact_mail'>
                <h1 className='bold_head'>Contact</h1>
               <ul> <small>rfidandnodemcu@gmail.com</small></ul>
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