import React, { Component } from 'react';
import { auth, createUserDocument } from '../firebase';
import { useNavigate } from "react-router-dom";
import "../styles.css";
import "../../src/components/components/css/styles.css";
import { Navigate } from 'react-router-dom';

import {Link} from "react-router-dom";


class Singup extends Component {

  // const navigate = useNavigate();

  state = { address: '', lastName: '', displayName: '', phone: '', email: '', password: '' };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, displayName, phone, lastName, address } = this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocument(user, { displayName, lastName, address, phone });
    } catch (error) {
      console.log('error', error);
    }

    this.setState({ address: '', lastName: '', displayName: '', phone: '', email: '', password: '' });

    // navigate("/");
  };

  render() {
    const { address, lastName, displayName, phone, email, password } = this.state;
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
          <h2>Signup</h2>

          <input
            type="name"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="lastName"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            placeholder="lastName"
          />
          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            placeholder="phone"
          />
          <input
            type="address"
            name="address"
            value={address}
            onChange={this.handleChange}
            placeholder="address"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button>Signup</button>
        </form>
          </section>
        </div>
      </div>
    </div>
    );
  }
}

export default Singup;
