import React from "react";
import "./Footer.css";
import link from "../../../img/linkedin.png";
import fb from "../../../img/facebook.png";
import insta from "../../../img/instagram.png";
import reddit from "../../../img/reddit.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-5 footer-clean">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-4 col-md-3 item">
            <h3>Services</h3>  
            
            <ul>
              <li>
                
                <a href="#">Whole seller</a>
              </li>
              <li>
                <a href="#">installment process</a>
              </li>
              <li>
                <a href="#">Cheapest Price</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-3 item">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Legacy</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-3 item">
            <h3>Careers</h3>
            <ul>
              <li>
                <a href="#">Job openings</a>
              </li>
              <li>
                <a href="#">Employee success</a>
              </li>
              <li>
                <a href="#">Benefits</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 item social">
            <a href="#">
              <img src={link} style={{ height: "45px" }}></img>
            </a>
            <a href="#">
             
              <img src={fb} style={{ height: "45px" }}></img>
            </a>
        
            <a href="#">
              <img src={insta} style={{ height: "45px" }}></img>
            </a>
            <a href="#">
              <img src={reddit} style={{ height: "45px" }}></img>
            </a>
            <p className="mt-3 copyright ">
              copyright @ {year} 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
