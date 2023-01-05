import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import {
   useCreateUserWithEmailAndPassword,
   useSendEmailVerification,
   useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinner from '../../common/Spinner/Spinner';
import Google from '../Login/Google/Google';
import './Register.css';

const Register = () => {
   const [signUp, setSignUp] = useState();
   const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);

   const [setProfile, updating, setError] = useUpdateProfile(auth);
   const nameRef = useRef('');
   const emailRef = useRef('');
   const passwordRef = useRef('');
   const navigate = useNavigate();
   const navigation = () => {
      navigate('/inventory');
   };
   let errorElement;
   if (loading || updating) {
      return <Spinner></Spinner>;
   }
   if (user) {
      console.log('user', user);
   }
   if (error) {
      errorElement = <p className="text-danger"> Error: {error?.message}</p>;
   }

   const handleRegister = async (event) => {
      event.preventDefault();
      const name = nameRef.current.value;
      const email =emailRef.current.value;
      const password = passwordRef.current.value;
      console.log(name,email,password);
      await createUserWithEmailAndPassword(email, password);
      await setProfile({ displayName: name });
      console.log('Updated profile');
      navigate('/inventory');
   };
   return (
      <div className="text-center container mx-auto mt-5 pt-3 pb-4 register-div"  style={{width: "30rem"}}>
         <h1 className="mb-3">Create an Account</h1>
         <form onSubmit={handleRegister} className="form-group">
            <div class="form mx-auto">
               <input
                  class="input"
                  placeholder="Type your Name"
               
                ref={nameRef}
                  type="text"
                  required
               />
               <span class="input-border"></span>
            </div>
            <div class="form  mx-auto">
               <input
                  class="input"
                  placeholder="Type your Email"
                
                  type="email"
                  ref={emailRef}
                  required
               />
               <span class="input-border"></span>
            </div>
            <div class="form mx-auto">
               <input
                  class="input"
                  placeholder="Type your Password"
                  minLength={6}
               
                  ref={passwordRef}
                  type="password"
                  required
               />
               <span class="input-border"></span>
            </div>

            <input
               onClick={() => setSignUp(!signUp)}
               type="checkbox"
               name="terms"
               id="terms"
            />
            <label
               className={`ps-2 pt-2 ${signUp ? '' : 'text-danger'}`}
               htmlFor="terms"
            >
               Accept Apple's Terms and Conditions
            </label>
          
           

<button className='register-btn mx-auto' disabled={!signUp}>
    <span>Continue</span>
    <svg  width="30" height="30" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>
</button>
         </form>
         {errorElement}
         <p>
            Already have an account?{' '}
            <Link
               to="/login"
               className="text-primary fw-bold pe-auto text-decoration-none"
               onClick={navigation}
            >
               {' '}
               Please Login
            </Link>{' '}
         </p>
         <Google></Google>
      </div>
   );
};

export default Register;
