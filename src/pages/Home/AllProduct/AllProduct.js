import React from "react";
import { Link } from "react-router-dom";

const AllProduct = () => {
  return (
    <div className="container">
      <h1 className="text-primary fw-bold my-4">All Product List</h1>
      <div className="row row-cols-1 g-5 justify-content-evenly">
      <div className="card col-sm-12 col-md-6 col-lg-6 gx-5"style={{width:"21rem"}}>
        <div className="card-header">Laptop</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">1.Macbook Air</li>
          <li className="list-group-item">2.Macbook Pro</li>
          <li className="list-group-item">3.Macbook max</li>
         <li className="list-group-item"><Link to="/allshow" className="card-link text-decoration-none fw-bold">See More</Link></li> 
        </ul>
      </div>
      <div className="card col-sm-12 col-md-6 col-lg-6" style={{width:"21rem"}}>
        <div className="card-header">Gadgets</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">1.Apple Watch</li>
          <li className="list-group-item">2.Airpod</li>
          <li className="list-group-item">3.Ipad</li>
          <li className="list-group-item"><Link to="/allshow" className="card-link text-decoration-none fw-bold">See More</Link></li> 
        </ul>
      </div>
      </div>
    </div>
  );
};

export default AllProduct;
