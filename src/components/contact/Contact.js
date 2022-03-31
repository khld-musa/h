import { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_amiar39",
        "template_9l17q18",
        formRef.current,
        "UmF0_AbX-rsAw0bkh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <i className="c-icon fa-solid fa-phone"></i>
              +249 9990 288 56
            </div>
            <div className="c-info-item">
              <i className="c-icon fa-solid fa-envelope"></i>
              khalidmusa249@gmail.com
            </div>
            <div className="c-info-item">
              <i className="c-icon fa-solid fa-location-dot"></i>
              khartoum North, khartoum Sudan
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
          <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
