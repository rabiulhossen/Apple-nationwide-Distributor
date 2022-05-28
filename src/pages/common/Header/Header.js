import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import theme from "../../../img/Theme.jpg";
import { Button } from "bootstrap";
import { Nav } from "react-bootstrap";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fw-bold fs-4 sticky-top mb-1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img style={{ height: "50px" }} src={theme} className="rounded"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/inventory">
                Inventory
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/blog">
                Blog
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/"
                className="text-dark px-4 nav-link active"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-dark" to="/myitem">
                    My Items
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-dark" to="/addnewitem">
                    Add Item
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-dark" to="/maintenance">
                    Manage Item
                  </Link>{" "}
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="/login">
                  Login
                </Link>
              </li> 
            )}  
          </ul>
        
        </div>
      </div>
    </nav>
  );
};

export default Header;
