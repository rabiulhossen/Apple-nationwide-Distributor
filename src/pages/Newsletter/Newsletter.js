import React, { useRef } from 'react';
import './Newsletter.css';
import emailjs from '@emailjs/browser';

export default function Newsletter() {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
     emailjs.sendForm('apple-world', 'template_fcgfy2c', form.current, '1NZeW9SAwUpK04-h_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

   return (
      <div className=' container mt-5 mx-auto'>
<h2 className='fw-bold mb-3'>Stay Tuned with Us</h2>
         <div class="input-group">
            <form action=""  onSubmit={sendEmail}   ref={form}  >
            <input
        
               type="email"
               class="input-newsletter"
               id="Email"
               name="Email"
               placeholder="Enter your email"
               autocomplete="off"
               required
            />
            <input class="button--submit" value="Subscribe" type="submit" />
            </form>
         </div>
      </div>
   );
}
