import React from 'react';
import './Newsletter.css';

export default function Newsletter() {
   return (
      <div className=' container mt-5 mx-auto'>
<h2 className='fw-bold mb-3'>Stay Tuned with Us</h2>
         <div class="input-group">
            <input
               type="email"
               class="input-newsletter"
               id="Email"
               name="Email"
               placeholder="Enter your email"
               autocomplete="off"
            />
            <input class="button--submit" value="Subscribe" type="submit" />
         </div>
      </div>
   );
}
