import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../../common/Spinner/Spinner";
import GoogleSignin from "../GoogleSign/GoogleSignin";
import GoogleSign from "../GoogleSign/GoogleSignin";

const Register = () => {
  const [signUp, setSignUp] = useState();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [setProfile, updating, setError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const navigation = () => {
    navigate("/login");
  };
  let errorElement;
  if (loading || updating) {
    return <Spinner></Spinner>
  }
  if (user) {
    console.log("user", user);
  }
  if (error) {
    errorElement = <p className="text-danger"> Error: {error?.message}</p>;
  }

  
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await setProfile({ displayName: name });
    console.log('Updated profile');
    navigate('/home');
}
  return <div>
 <h1 className='text-center text-info pb-2'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setSignUp(!signUp)} type="checkbox" name="terms" id="terms" />

                <label className={`ps-2 ${signUp ? '' : 'text-warning'}`} htmlFor="terms">Accept Exoplanet Photography Terms and Conditions</label>
                <input
                    disabled={!signUp}
                    className='register-btn'
                    type="submit"
                    value="Register" />
            </form>
            {errorElement};

       <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigation}>Please Login</Link> </p>
       <GoogleSignin></GoogleSignin>
  </div>;
};

export default Register;
