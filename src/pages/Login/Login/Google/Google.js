import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Spinner from "../../../common/Spinner/Spinner";

import Gooogle from '../../../../img/google.png';
const Google = () => {

    const [SignInWithGoogle,user,loading,error] = useSignInWithGoogle(auth);
    const navigate =useNavigate();

let errorElement;
if(loading){
    return <Spinner></Spinner>
};

if(error){
    errorElement =<p className="text-danger"> Error:{error?.message}</p>
}
if(user){
    navigate("/home");
}
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="">
        <button onClick={() => SignInWithGoogle()} className="button-google">
          <img style={{ width: "41px" }} src={Gooogle} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Google;