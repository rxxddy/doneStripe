import React from 'react';
import { useState, useRef, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import logo from '../images/logo.png';
import userLogo from '../images/user.png';
import {Link} from "react-router-dom";
import "../styles.css";
import "../../src/components/components/css/styles.css";
import '../firebase';
// import { getAuth } from "firebase/auth";

let stripePromise;

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {

  const ref = useRef(null);



  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "December, 31, 2032";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);


  const navigate = useNavigate();
  const auth = getAuth();
  let handleLogOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful");
      
      navigate("/Signup");
    });
  };
  let handleLogOut2 = () => {
    console.log(auth.currentUser);
  };

  let check = () => {
    console.log(auth.currentUser.email);
  };



  const user = auth.currentUser;

  let checkInfo = () => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        // console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Second Name: " + profile.lastName);
        console.log("  Email: " + profile.email);
        // console.log("  Photo URL: " + profile.photoURL);
      });
    }
  }
  


  return (
    
      <div className="main-container">

            <nav style={{zIndex: "99999999999999", position: "absolute"}}>
              <div className="navbar">
                <div className="container nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                      <span className="line line1"></span>
                      <span className="line line2"></span>
                      <span className="line line3"></span>
                    </div>  
                  <div className="menu-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">info</Link></li>
                      {(function() {
                        if (auth.currentUser != null) {
                          return <li style={{display: "grid"}}>
                            <button onClick={handleLogOut} style={{border: "none"}}>Logout</button>
                            <Link to="/profile" >Profile</Link>
                          </li>
                        } else {
                          return <li style={{display: "grid"}}>
                            <Link to="/login" c>Login</Link>
                            <Link to="/Signup" c>Sing Up</Link>
                          </li>
                        }
                      })()}
                  </div>
                </div>
              </div>
            </nav>

            <section className="sectionD">
                    
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
                                <ul>
                                {(function() {
                                  if (auth.currentUser != null) {
                                    return <li>
                                      <button onClick={handleLogOut} className="right">Logout</button>
                                      <Link to="/profile" className="right">Profile</Link>
                                    </li>
                                  } else {
                                    return <li>
                                      <Link to="/login" className="right">Login</Link>
                                    </li>
                                  }
                                })()}
                                </ul>

                                
                              </nav>

                        
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="section" style={{height: "100vh"}}>
              {/* <div className="section22" style={{marginTop: "20vh"}}>
                Hello world
              </div>
              <div>

                <button onClick={checkInfo}>Check</button>
              </div> */}
              <div className="profile00" style={{marginTop: "10%"}}>
                <div className="profile0">
                  <div className="profile01">
                
                    <div className="profileImage1">
                      <img src={userLogo} className="profileImage2"/>
                    <div className="profile2">
                      {(function() 
                        
                        {
                            
                          if (auth.currentUser != null) {
                            let userEmail = (auth.currentUser.email);
                            return <div>
                              <div className="profileText1">{userEmail}</div>
                            </div>
                          } else {
                            return <div>
                              <Link to="/login" className="profileText1">Please login first</Link>
                            </div>
                          }
                        })()}
                    </div>
                    </div>
                  </div>
                </div>
                <div className="profile2">
                  {/* <div className="profileImage">
                    <img src={userLogo}/>
                    
                  </div> */}
                </div>
                  <div className="profile1">
                    {/* <div>{userEmail}</div> */}
                    
                  </div>
              </div>
            </section>
            
        </div>


  );
};

export default Checkout;