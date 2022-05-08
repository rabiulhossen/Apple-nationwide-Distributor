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
import Google from "../Login/Google/Google";


const Register = () => {
  const [signUp, setSignUp] = useState();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  
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
    navigate('/inventory');
}
  return( <div>
 <h1 className='text-center text-info pb-2'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input className="my-3" type="text" name="name" id="" placeholder='Your Name' /> <br/>

                <input type="email" name="email" id="" placeholder='Email Address' required />
                 <br/>
                <input className="my-3" type="password" name="password" id="" placeholder='Password' required />  <br/>
                <input onClick={() => setSignUp(!signUp)} type="checkbox" name="terms" id="terms" />

                <label className={`ps-2 ${signUp ? '' : 'text-warning'}`} htmlFor="terms">Accept Apple Disttributor Terms and Conditions</label>
                <input
                    disabled={!signUp}
                    className='register-btn'
                    type="submit"
                    value="Register" />
            </form>
            {errorElement};

       <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigation}> Please Login</Link> </p>

       <Google></Google>
  </div>)
};

export default Register;
