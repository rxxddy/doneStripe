import { useState, createRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import "../styles.css";
import "../../src/components/components/css/styles.css";
import logo from '../images/logo.png';
import {Link} from "react-router-dom";
import React from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../firebase';

const Profile = () => {
  const { isLoggedIn , logout } = useContext(AuthContext);

  const auth = getAuth();
  const navigate = useNavigate();

  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(auth.currentUser);
    } else {
      // User is signed out
      navigate("/singin");
    }
  });

  let handleLogOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful");
      
      navigate("/singup");
    });
  };


  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snapshot = await getDoc(doc(db, "users", user.uid))
        console.log(snapshot.data())
      }
    });
  }, []);

  const email = user.email;

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
                          {email}
        </div>
      </section>
      </div>
    </div>
  );
};


export default Profile;
