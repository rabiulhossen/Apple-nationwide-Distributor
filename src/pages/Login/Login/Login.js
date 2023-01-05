import React, { useRef, useState } from 'react';
import auth from '../../../firebase.init';
import Spinner from '../../common/Spinner/Spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './Loggin.css';
import Notifications, { notify } from 'react-notify-toast';
import PageTitle from '../../common/PageTitle/PageTitle';
import {
   useSignInWithEmailAndPassword,
   useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth';

import Google from './Google/Google';

const Login = () => {
   const emailRef = useRef('');
   const passwordRef = useRef('');
   const navigate = useNavigate();
   const location = useLocation();
   const [email, setEmail] = useState('');

   let from = location.state?.from?.pathname || '/';

   let errorElement;

   const [SignInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);

   if (loading) {
      return <Spinner></Spinner>;
   }
   if (user) {
      navigate('/home');
   }
   if (error) {
      errorElement = (
         <code className="text-danger">Error:Incorrect email or password </code>
      );
   }

   const SendPasswordReset = () => {
      
      const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    
      if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (sending) {;
        return <p>Sending...</p>;
      }
      if(email){
         sendPasswordResetEmail(email)
      }}

   const handleSubmit = (e) => {
      e.preventDefault();
      const email =emailRef.current.value;
      const password = passwordRef.current.value;
      console.log(email, password);
      SignInWithEmailAndPassword(email, password);
   };
   const navigateRegister = (event) => {
      navigate('/register');
   };

   let myColor = { background: '#0E1717', text: '#FFFFFF' };

   // const passwordReset = async () => {
   //    const email = emailRef.current.value;
   //    if (email) {
   //       await SendPasswordResetEmail(email);

   //       notify.show("this is sample text", "succes", 5000, myColor);
   //    } else {

   //       notify.show("this is sample text", "warning", 5000, myColor);
   //    }
   // };

   return (
      <div
         className="container mx-auto mt-5 pt-3 pb-4 login-card"
         style={{ width: '26rem' }}
      >
         <Notifications />
         <div className="form-container">
            <PageTitle title="Login"></PageTitle>
            <div className="form">
               <h2 className="text-primary text-center mb-5 mt-3">
                  Access Your Account!
               </h2>

               <Form onSubmit={handleSubmit}>
                  <Form.Group
                     className="form-control"
                     controlId="formBasicEmail"
                  >
                     <Form.Control
                        type="email"
                       ref={emailRef}
                        required
                        className="input"
                     />{' '}
                     <label>
                        <span style={{ transitionDelay: '0ms' }}>U</span>
                        <span style={{ transitionDelay: '50ms' }}>s</span>
                        <span style={{ transitionDelay: '100ms' }}>e</span>
                        <span style={{ transitionDelay: '150ms' }}>r</span>
                        <span style={{ transitionDelay: '200ms' }}>E</span>
                        <span style={{ transitionDelay: '250ms' }}>m</span>
                        <span style={{ transitionDelay: '300ms' }}>a</span>
                        <span style={{ transitionDelay: '350ms' }}>i</span>
                        <span style={{ transitionDelay: '400ms' }}>l</span>
                     </label>
                  </Form.Group>

                  <Form.Group
                     className=" form-control"
                     controlId="formBasicPassword"
                  >
                     <Form.Control
                        ref={passwordRef}
                        type="password"
                        required
                        className="input"
                     />
                     <label>
                        <span style={{ transitionDelay: '0ms' }}>P</span>
                        <span style={{ transitionDelay: '50ms' }}>a</span>
                        <span style={{ transitionDelay: '100ms' }}>s</span>
                        <span style={{ transitionDelay: '150ms' }}>s</span>
                        <span style={{ transitionDelay: '200ms' }}>w</span>
                        <span style={{ transitionDelay: '250ms' }}>o</span>
                        <span style={{ transitionDelay: '300ms' }}>r</span>
                        <span style={{ transitionDelay: '350ms' }}>d</span>
                     </label>
                  </Form.Group>

                  <button className="button px-4 py-2 mb-2" type="submit">
                     Sign In
                  </button>
               </Form>
               {errorElement}
               <p className="pt-3 pb-0 mb-1">
                  New to{' '}
                  <span className="fw-semiBold ps-1"> Apple Nationwide</span>?
                  <Link
                     to="/register"
                     className="text-primary ps-1 text-decoration-none"
                     onClick={navigateRegister}
                  >
                     Please Register
                  </Link>
               </p>
               <p>
                  Forget Password?
                  <button
                     onClick={async () => {
                        const success = await SendPasswordReset(email);
                        if (success) {
                           alert('Sent email');
                        }
                     }}
                     className="btn btn-link text-primary ps-1 pt-0 text-decoration-none"
                  >
                     Reset Password
                  </button>
               </p>

               <Google></Google>
            </div>
         </div>
      </div>
   );
};

export default Login;
