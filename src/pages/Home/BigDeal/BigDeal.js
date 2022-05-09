import React from "react";
import hand from "../../../img/119.png";

const BigDeal = () => {
  return (
    <div>
      <h1 className="m-5 text-primary fw-bold">We offer You</h1>
      <div className="d-md-flex justify-content-around align-items-center">
        <div className="col-md-4 col-12 col-sm-12 ">
          <h3 className="text-info">
            We are hiring dealers all over the country to deliver our goods to
            the people.To create your own business in Tech field we help you and encouriage you.We provide you best products,strategy and marketting plan.Feel free to Contact us if you are interested. Below is
            our contact.
          </h3>
        </div>
        <div className="col-md-6 col-sm-12 col-12">
          <img className="img-fluid rounded" src={hand}></img>
        </div>
      </div>
    </div>
  );
};

export default BigDeal;
