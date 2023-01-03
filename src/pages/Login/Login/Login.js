import React, { useRef } from 'react';
import auth from '../../../firebase.init';
import Spinner from '../../common/Spinner/Spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './Loggin.css';

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

   let from = location.state?.from?.pathname || '/';
   let errorElement;
   const [SignInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
   const [SendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

   if (loading || sending) {
      return <Spinner></Spinner>;
   }
   if (user) {
      navigate('/inventory');
   }
   if (error) {
      errorElement = <p className="text-danger"> Error: {error?.message}</p>;
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      SignInWithEmailAndPassword(email, password);
   };
   const navigateRegister = (event) => {
      navigate('/register');
   };
   const passwordReset = async () => {
      const email = emailRef.current.value;
      if (email) {
         await SendPasswordResetEmail(email);
         alert('check your email');
      } else {
         alert('enter your email address');
      }
   };

   return (
      <div className="container w-25 mx-auto mt-5 pt-5 login-card">
         <div className="form-container">
            <PageTitle title="Login"></PageTitle>
            <div className="form">
               <h1 className="text-primary text-center mt-2">Please Login</h1>

               <Form onSubmit={handleSubmit}>
                  
                     <Form.Group className="form-control" controlId="formBasicEmail">
                        <Form.Control
                           ref={emailRef}
                           type="email"
                          
                           required
                           className='input'
                        /> <label>
                        <span style={{transitionDelay:"0ms"}}>U</span>
                        <span style={{transitionDelay:"50ms"}}>s</span>
                        <span style={{transitionDelay:"100ms"}}>e</span>
                        <span style={{transitionDelay:"150ms"}}>r</span>
                        <span style={{transitionDelay:"200ms"}}>E</span>
                        <span style={{transitionDelay:"250ms"}}>m</span>
                        <span style={{transitionDelay:"300ms"}}>a</span>
                        <span style={{transitionDelay:"350ms"}}>i</span>
                        <span style={{transitionDelay:"400ms"}}>l</span>
                     </label>
                     </Form.Group>
                    
                  
                  
                     <Form.Group className=" form-control" controlId="formBasicPassword">
                        <Form.Control
                           ref={passwordRef}
                           type="password"
                        
                           required
                           className='input'
                        />
                        <label>
                        <span style={{transitionDelay:"0ms"}}>U</span>
                        <span style={{transitionDelay:"50ms"}}>s</span>
                        <span style={{transitionDelay:"100ms"}}>e</span>
                        <span style={{transitionDelay:"150ms"}}>r</span>
                     </label>
                     </Form.Group>
                     
                
                  <button className="button px-5 py-3" type="submit">
                     Login
                  </button>
               </Form>
               {errorElement}
               <p className="pt-3">
                  New to <span className="fw-bold">Apple Nationwide</span>?
                  <Link
                     to="/register"
                     className="text-primary pe-auto text-decoration-none"
                     onClick={navigateRegister}
                  >
                     Please Register
                  </Link>
               </p>
               <p>
                  Forget Password?
                  <button
                     onClick={passwordReset}
                     className="btn btn-link text-primary pe-auto text-decoration-none"
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
