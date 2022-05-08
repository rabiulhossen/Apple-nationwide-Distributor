import React from 'react';
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import theme from '../../../img/Theme.jpg';

const Header = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = ()=>{
signOut(auth)
  }
    return (
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home"><img style={{height:"50px"}} src={theme} className="rounded"></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/inventory">Inventory</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">{
                user? <button className='btn btn-primary' onClick={handleSignOut}>SignOut</button>:
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
              }
               
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Header;