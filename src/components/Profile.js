import { useState, createRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import "../styles.css";
import "../../src/components/components/css/styles.css";
import logo from '../images/logo.png';
import {Link} from "react-router-dom";
import React from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const { isLoggedIn , logout } = useContext(AuthContext);

  const auth = getAuth();
  const navigate = useNavigate();
  
  let handleLogOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/singin");
    });
  };
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(auth.currentUser);
    } else {
      // User is signed out
      navigate("/singin");
    }
  });

  return (      
    <div className="main-container">
      <div className="main-container">
      <section className="section">
                    
        <div className="block mains">
            <div className="container2 mains center">
    
                <div className="section22 navbar vercent">
    
    
                        <div className="left1">
                            <div className="left">
                                <Link to="/" className="navlink1 navlink2 ">MAIN</Link>
                            </div>
    
    
                            <div className="left">
                                <p className="navlink1 ">INFO</p>
                            </div>
                        </div>
                   
                        <a className="nav_logo    center">
                            <img src={logo} className="nav_logo-img"/>
                        </a>
    
                    <div className="right1">
                      <nav className="right">
                        {/* <ul>
                          {isLoggedIn && (
                            <li>
                              <button onClick={handleLogOut} className="right">Logout</button>
                              <Link to="/profile" className="right">Profile</Link>
                            </li>
                          )}
                          {!isLoggedIn && (
                            <li>
                              <Link to="/account" className="right">Login</Link>
                            </li>
                          )}
                        </ul> */}
                        <button onClick={handleLogOut} className="right">Logout</button>
                      </nav>
    
                
                    </div>
    
    
                </div>
            </div>
        </div>
      </section>
      <section className="section">
        {/* <h2>{auth.currentUser.email}</h2> */}
        <h2>"auth.currentUser.email"</h2>
      </section>
      </div>
    </div>
  );
};

export default Profile;
