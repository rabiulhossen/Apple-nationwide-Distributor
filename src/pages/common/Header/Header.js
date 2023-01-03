import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import theme from "../../../img/theme.gif";


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


<Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img style={{ height: "45px",width:"80px" }} src={theme} className="rounded"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav className="d-flex justify-content-end ">
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
 


  );
};

export default Header;
