import React, { useState } from "react";
import Map from "./images/map.png";
import { useNavigate } from "react-router-dom";
import social_media from "./images/social_media.png";
import "./Contact.css";
import axios from "../utils/axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setmailSent] = useState(false);
  const [mailSuccess, setMailSuccess] = useState(false);

  const canSend = [name, email, number, message].every(Boolean);

  const mailHeading = mailSent ? (
    <h1 className="msg_title">Sending Mail.....</h1>
  ) : (
    <h1 className="msg_title">SEND US A MESSAGE</h1>
  );
  const navigate = useNavigate();

  const afterMailSend = <h1 className="msg_title">MAIL SENT</h1>;

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending request to feedback");
      setmailSent(true);
      const resp = await axios.post(
        "/feedback",
        JSON.stringify({ email, name, number, message }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (resp.status === 200) {
        setMailSuccess(true);
        console.log("Sent feed back to backend--->", resp);
        setTimeout(() => {
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
          setmailSent(false);
          setMailSuccess(false);
          // navigate("/");
        }, 1800);
      }
    } catch (err) {
      console.log("Something went wrong-->", err?.message);
    }
  };
  return (
    <section>
      <div className="contact_pg">
        <img src={Map} alt="" className="map_img"></img>
        <section className="contact_form_container">
          <form className="contact__form" onSubmit={handleSendMessage}>
            {mailSuccess ? afterMailSend : mailHeading}
            <div>
              {/* <label htmlFor="username">Username</label> */}
              <input
                className="contents_form"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="mail_id"
                placeholder="Email"
                required
              />
            </div>
            <div>
              {/* <label htmlFor="pwd">Password</label> */}
              <input
                className="contents_form"
                type="user_name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="user_id"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="contents_form"
                type="phNo"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                id="Phone"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <input
                className="contents_form"
                type="msg"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
              />
            </div>
            <button disabled={!canSend} className="send_msg_button">
              SEND MESSAGE
            </button>
          </form>
        </section>
        <h1 className="contact_us_head">Contact Us</h1>
      </div>

      <div className="contact_info">
        <div className="team_names">
          <h1 className="bold_head">Our Team</h1>

          <ul>
            <small>Ganeshswaminathan R</small>
          </ul>
          <ul>
            <small>Karan J</small>
          </ul>
          <ul>
            <small>Hemanth M E</small>
          </ul>
          <ul>
            <small>Karthik</small>
          </ul>
        </div>
        <div className="location">
          <h1 className="bold_head">Location</h1>
          <ul>
            <small>Bengaluru, Karnataka</small>
          </ul>
        </div>

        <div className="contact_mail">
          <h1 className="bold_head">Contact</h1>
          <ul>
            {" "}
            <small>syncrypt.tech@gmail.com</small>
          </ul>
        </div>

        <div className="social">
          <img className="social_media_links" src={social_media} alt=""></img>
          <h1>-Follow Us</h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
