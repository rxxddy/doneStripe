import React from 'react';
import { useState, useRef, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import ticket from '../images/ticket.png';
import logo from '../images/logo.png';
import greek1 from '../images/greek1.png';
import gsap from "gsap";
import bghex from "../images/bghex.png";
import arrow from "../images/arrow.png";
import fashion from "../images/fashion.png";
import disco from "../images/disco.png";
import {Link} from "react-router-dom";
import { useScroll, useTransform } from "framer-motion/dist/framer-motion";
import "../styles.css";
import "../../src/components/components/css/styles.css";
import { useIntersection } from 'react-use';
let stripePromise;
import { Title } from "./style";
import { Carousel } from 'react-carousel-minimal';
import { AuthContext } from "../context";
import banner from "../images/banner.png";
import banner1 from "../images/1.png";
import banner2 from "../images/2.png";
import banner3 from "../images/3.png";
import banner4 from "../images/4.png";
import banner5 from "../images/5.png";
// import { auth, createUserDocument } from '../firebase';
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
      
      navigate("/singup");
    });
  };
  let handleLogOut2 = () => {
    console.log(auth.currentUser);
  };

  let check = () => {
    console.log(auth.currentUser.email);
  };
  


  return (
    
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
            <section className="section">
              <div className="section22" style={{marginTop: "20vh"}}>
                Hello world
              </div>
              <div>

                <button onClick={check}>Check</button>
              </div>
              <div>
                {/* <div>{userEmail}</div> */}
                {(function() 
                  
                {
                    
                   if (auth.currentUser != null) {
                    let userEmail = (auth.currentUser.email);
                     return <div>
                      <div>{userEmail}</div>
                     </div>
                   } else {
                     return <div>
                      <Link to="/login">Please login first</Link>
                     </div>
                   }
                 })()}
              </div>
            </section>
            
        </div>


  );
};

export default Checkout;