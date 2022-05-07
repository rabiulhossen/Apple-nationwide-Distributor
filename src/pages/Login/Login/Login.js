import React, { useRef } from "react";
import auth from "../../../firebase.init";
import Spinner from "../../common/Spinner/Spinner"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Toast } from "react-bootstrap";
import GoogleSign from "../GoogleSign/GoogleSign";
import PageTitle from "../../common/PageTitle/PageTitle";
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail } from "react-firebase-hooks/auth";

const Login = () => {
const emailRef = useRef("");
const passwordRef =useRef("");
const navigate= useNavigate();
const location =useLocation();

let from = location.state?.from?.pathname || "/checkout";
let errorElement;
const [SignInWithEmailAndPassword,
user,loading, error] = useSignInWithEmailAndPassword(auth);
const [SendPasswordResetEmail,sending]= useSendPasswordResetEmail(auth);

if(loading || sending){
  return <Spinner></Spinner>

}
if(user){
  navigate(from, {replace:true});

}
if(error){
  errorElement =<p className="text-danger"> Error: {error?.message}</p>
}

const handleSubmit =(e)=>{
e.preventDefault();
const email =emailRef.current.value;
const password = passwordRef.current.value;

SignInWithEmailAndPassword(email,password);
}
const navigateRegister = event => {
  navigate('/register');
}
const passwordReset = async () =>{
    const email= emailRef.current.value;
    if(email){
        await SendPasswordResetEmail(email);
        Toast('sent email');

    }
    else{
        Toast('enter your email address');
    }
}


return (
  <div className='container w-50 mx-auto mt-5 pt-5'>
      <PageTitle title='Login'></PageTitle>
      <h1 className='text-primary text-center mt-2'>Please Login</h1>
      
      <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <button className="button-submit px-5 py-3" type="submit">
              Login
          </button>
      </Form>
      {errorElement}
      <p className="pt-3">New to <span className="fw-bold">Exoplanet</span>? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
      <p>Forget Password? <button onClick={passwordReset} className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>

<GoogleSign></GoogleSign>
    
  </div>
);
};


export default Login;
