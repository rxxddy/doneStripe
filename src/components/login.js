import React, { Component } from 'react';
import { auth, createUserDocument } from '../firebase';
import {Link} from "react-router-dom";
import "../styles.css";
import "../../src/components/components/css/styles.css";
import { Navigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
const getStripe = () => {
  const [errorMessage, setErrorMessage] = useState('');
}
import firebase from 'firebase/compat/app';

class Login extends Component {
  state = { user: false, email: '', password: '', errorMessage: '', setErrorMessage: '' };

  // static [errorMessage, setErrorMessage] = useState('');

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  };
  
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, errorMessage } = this.state;
    if (email && password) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(email, password);
        console.log(createUserDocument);
        this.setState({ user: true });
      } catch (error) {

          let message = error;
          
          console.log(error)
          console.log(message)

          if (message == 'FirebaseError: Firebase: Error (auth/wrong-password).') {
            this.setState({ errorMessage: 'Wrong Password'  });
          } else if (message == 'FirebaseError: Firebase: Error (auth/user-not-found).') {
            this.setState({ errorMessage: 'User not found'  });
          } else {
            this.setState({ errorMessage: message  });
          }
          
          
          // setErrorMessage('error logging in', error);
      }
    }
  };
  handleSubmit2 = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    console.log(auth.currentUser);
  };

  render() {
    const { email, password, errorMessage, setErrorMessage } = this.state;

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
              <h1>Log In</h1>
              <form className="signup-login" onSubmit={this.handleSubmit}>
                <div className="control">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="control">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                </div>
                <div className="actions">
                  <button className="sendinfo">Log In</button>
                </div>

                <div className="control">
                  <input
                    type="errorMessage"
                    name="errorMessage"
                    value={errorMessage}
                    onChange={this.handleChange}
                    placeholder=""
                  />
                </div>
                {/* <div>
                  {error !== null || undefined ? "Wrong Password": null}
                </div> */}
                {/* {errorMessage && (
                  <p className="error"> {errorMessage} </p>
                )}  */}
              </form>
              {this.state.user && (
                <Navigate to="/" replace={true} />
              )}
              <Link to="/resetpass"><div className="resetpassio">Forgot password?➤</div></Link>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
