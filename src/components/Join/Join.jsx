import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_xordrm6', 'template_ij6mq89', form.current,
          '3XPnbhKhT1PupNfjW')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
      };
  return (
    <div>
      <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className="email-container" onClick={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter Your Email Adress' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Join
