import React, { Component } from 'react';
// import {Link} from "react-router-dom";
import "../styles.css";
import "../../src/components/components/css/styles.css";
// import { Navigate } from "react-router-dom";
// import { useState } from "react";
// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPass() {
  const navigate = useNavigate();

  const [email, setEmail, errorMessage] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      navigate('/login');
      console.log("Email was sent");
    } catch (error) {

      let message = error;

      console.log("Could not send reset password");
      
      if (message == 'FirebaseError: Firebase: Error (auth/wrong-password).') {
        this.setState({ errorMessage: 'Wrong Password'  });
      } else if (message == 'FirebaseError: Firebase: Error (auth/user-not-found).') {
        this.setState({ errorMessage: 'User not found'  });
      } else {
        this.setState({ errorMessage: message  });
      }
    }
  }
  return (
        <div className="main-container2">
        <div className="main-container3">
        <nav style={{zIndex: "999999", position: "absolute", justifyContent: "center", display: "flex",
    alignItems: "flex-start", top: "0", position: "absolute"}}>
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
          <div className="accountLeft">
            <div className="insideLeft">

              <div className="hideonmobile">
                <div className="insideLefttext">Invite Only Right now</div>
                <div className="insideLefttext2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text   ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                <Link to="/" className="insideLefttext">Home➤</Link>
                <Link to="/Signup" className="insideLefttext" style={{fontSize: "medium"}}>
                No acc? <br />
                Signup
              </Link>
              </div>
            </div>
          </div>
          <div className="accountRight">
            <section className="auth">
              <h1>Reset Password</h1>

              {/* <input className="resetEmailInput" placeholder="Email" type="email" required /> <br/>
              <input className="resetPwInput" placeholder="Password" type="password"  /> <br/>
              <button className="resetBtn" type="button" onClick={triggerResetEmail}>Ripristina password</button> */}

              <form className="signup-login" onSubmit={onSubmit}>
                <div className="control">
                  <input placeholder="Email" value={email} onChange={onChange} type="email" required />
                </div>
                {/* <div className="control">
                  <input placeholder="Password" type="password" required />
                </div> */}
                <div className="actions">
                  <button className="sendinfo">Reset Password</button>
                </div>
                {(function() {

                if (errorMessage !== '') {
                  console.log('errorMessage not empty')
                  console.log(errorMessage)
                  return <div className="control">
                            <input
                              type="errorMessage"
                              name="errorMessage"
                              value={errorMessage}
                              onChange={changeText}
                              placeholder=""
                            />
                        </div>
                } else {
                  console.log('errorMessage empty')
                }

                })()}
              </form>

                {/* {errorMessage && (
                  <p className="error"> {errorMessage} </p>
                )} */}
              {/* {this.state.user && (
                <Navigate to="/" replace={true} />
              )} */}
            </section>
          </div>
        </div>
      </div>
    );
  }


