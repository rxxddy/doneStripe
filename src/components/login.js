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

class Login extends Component {
  state = { user: false, email: '', password: '' };
  
  handleChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  };
  
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        console.log(email, password);
        console.log(createUserDocument);
        this.setState({ user: true });
      } catch (error) {
        console.log('error logging in', error);
        setErrorMessage('Example error message!');
      }
    }
  };
  handleSubmit2 = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    console.log(auth.currentUser);
  };

  render() {
    const { email, password } = this.state;
    return (
        <div className="main-container2">
        <div className="main-container3">
          <div className="accountLeft">
            <div className="insideLeft">

              <div className="hideonmobile">
                <div className="insideLefttext">Invite Only Right now</div>
                <div className="insideLefttext2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text   ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                <Link to="/" className="insideLefttext">Home➤</Link>
                <Link to="/singup" className="insideLefttext" style={{fontSize: "medium"}}>
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
              </form>
                {/* {errorMessage && (
                  <p className="error"> {errorMessage} </p>
                )} */}
              {this.state.user && (
                <Navigate to="/" replace={true} />
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
