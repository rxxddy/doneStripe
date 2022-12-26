import React, { Component } from 'react';
import { auth, createUserDocument } from '../firebase';
import {Link} from "react-router-dom";
import "../styles.css";
import "../../src/components/components/css/styles.css";



class Login extends Component {
  state = { email: '', password: '' };

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
      } catch (error) {
        console.log('error logging in', error);
      }
    }

    // this.setState({ email: '', password: '' });
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
              </div>
            </div>
          </div>
          <div className="accountRight">
            <section className="auth">
              <h1>Sign Up</h1>
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
                  <button className="sendinfo">Signup</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
