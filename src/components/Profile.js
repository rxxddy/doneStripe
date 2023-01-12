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


import db from "../firebase";

import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  CollectionReference,
  onSnapshot,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

let stripePromise;

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Checkout() {
  

  
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
  const auth = getAuth();
  
  const user = auth.currentUser;
  const [products, setProducts] = useState([]);
  // const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);
  
  





  const navigate = useNavigate();

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
    console.log(products);
    console.log(subscription);
    console.log(auth.currentUser.uid);
    
  };



  // const user = auth.currentUser;

  let checkInfo = () => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        // console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + auth.currentUser.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Second Name: " + profile.lastName);
        console.log("  Email: " + profile.email);
        // console.log("  Photo URL: " + profile.photoURL);
      });
    }
  }


  useEffect(() => {

    setTimeout(() => {
      console.log("timeout2 secs");
    }, 2000);

    const q = query(collection(db, "customers", auth.currentUser.uid, "subscriptions"));

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_start:
              subscription.data().current_period_start.seconds,
            current_period_end: subscription.data().current_period_end.seconds,
          });
        });
      });
    }, []); // must include   << auth.currentUser.uid >>
          
  useEffect(() => {
    const q = query(collection(db, "products"), where("active", "==", true));
    
    onSnapshot(q, (querySnapshot) => {
      const products = {};
      
      querySnapshot.forEach(async (productDoc) => {
        products[productDoc.id] = productDoc.data();
        
        const productDocRef = doc(db, "products", productDoc.id);
        const priceSnap = await getDocs(collection(productDocRef, "prices"));
        
        priceSnap.forEach((price) => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });
      setProducts(products);
    });
  }, []);



  const loadCheckOut = async (priceId) => {
    const docRef = await addDoc(
      collection(db, "customers", auth.currentUser.uid, "checkout_sessions"),
      {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    onSnapshot(docRef, async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        // Show an error to a customer and inspect your
        // Cloud functions logs in the firebase console.
        alert(`An error occurred: ${error.message}`);
      }

      if (sessionId) {
        // We have a session, let's redirect to Checkout
        // Init Stripe
        const stripe = await loadStripe(
          "pk_test_51M0hAMK1PrYKJW73EuY6xenNHSTLuRoFN7CTDih18CE5swdGip9mrwXgaMwM7KX9tv0rXz3YX2ItlpI4kggZMsEi00ckAanGkb"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };


  return (
    
      <div className="main-container">

            <nav style={{zIndex: "999999", position: "absolute"}}>
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
                              <button onClick={check}>Check</button>

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
                 



                    <div className="plansScreen">
                      {subscription && (
                        <p>
                          Renewal date:{" "}
                          {new Date(
                            subscription?.current_period_end * 1000
                          ).toLocaleDateString()}
                        </p>
                      )}
                      {Object.entries(products).map(([productId, productData]) => {
                        ///  TODO: add logic
                        const isCurrentPackage = productData.name
                          ?.toLowerCase()
                          .includes(subscription?.role);
                        return (
                          <div
                            key={productId}
                            className={`${
                              isCurrentPackage && "plansScreen__plan--disabled"
                            } plansScreen__plan`}
                          >
                            <div className="plansScreen__info">
                              <h5>{productData.name}</h5>
                              <h6>{productData.description}</h6>
                            </div>

                            <button
                              onClick={() =>
                                !isCurrentPackage && loadCheckOut(productData.prices.priceId)
                              }
                            >
                              {isCurrentPackage ? "Current Package" : "Subscribe"}
                            </button>
                          </div>
                        );
                      })}
                    </div>




                </div>
              </div>
            </section>
            
        </div>


  );
};

export default Checkout;