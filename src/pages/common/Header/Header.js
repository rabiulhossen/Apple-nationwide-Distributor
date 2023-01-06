import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import theme from "../../../img/2.png";
import "./Header.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-info fw-medium fs-4 sticky-top mb-1">
    //   <div className="container-fluid">
    //   
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/home">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link active" to="/inventory">
    //             Inventory
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link active" to="/about">
    //             About
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link active" to="/blog">
    //             Blog
    //           </Link>
    //         </li>
    //         {user ? (
    //           <>
    //             <li className="nav-item">
    //               <Link
    //                 to="/"
    //             className="text-dark px-4 nav-link active"
    //                 onClick={handleSignOut}
    //               >
    //                 Sign Out
    //               </Link>{" "}
    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link active text-dark" to="/myitem">
    //                 My Items
    //               </Link>{" "}
    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link active text-dark" to="/addnewitem">
    //                 Add Item
    //               </Link>{" "}
    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link active text-dark" to="/maintenance">
    //                 Manage Item
    //               </Link>{" "}
    //             </li>
    //           </>
    //         ) : (
    //           <li className="nav-item">
    //             <Link className="nav-link active text-dark" to="/login">
    //               Login
    //             </Link>
    //           </li> 
    //         )}  
    //       </ul>
        
    //     </div>
    //   </div>
    // </nav>


<Navbar collapseOnSelect expand="lg" variant="dark" className="d-flex justify-content-between shadow bg-body-tertiary rounded  p-0 m-0 header">
      <Container>
      <div className="d-flex justify-content-between">
        <Navbar.Brand href="/home"><img style={{width:"77px" }} src={theme} className="rounded p-0 m-0"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav className="">
            <Link to="/" className="me-3 text-decoration-none">Home</Link>
            <Link to="/inventory"className="me-3 text-decoration-none" >inventory</Link>
            <Link to="/blog"className="me-3 text-decoration-none">blog</Link>
            <Link to="/about"className="me-3 text-decoration-none">about</Link>
            <Link eventKey={2} to="/login">
              login
            </Link>
          </Nav>
       
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>

   
 


  );
};

export default Header;
