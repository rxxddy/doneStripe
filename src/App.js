import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AuthForm from "./components/Auth/AuthForm";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Account from "./components/Account";
import Profile from "./components/Profile";
import ResetPass2 from "./components/ResetPass2";
import ResetPass from "./components/ResetPass";
import Home from "./components/Home";
import Singin from "./components/login";
import Signup from "./components/Signup";
import CookieConsent, { Cookies } from "react-cookie-consent";
import Layout from "./components/Layout/Layout";

import "./styles.css";
import Login from "./components/login";


export default function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route index element={<Checkout />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
              <Route path="account" element={<Account />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/ResetPass2" element={<ResetPass2 />} />
              <Route path="/ResetPass" element={<ResetPass />} />
              {/* <Route path="auth" element={<AuthForm />} /> */}
            </Routes>
          </Router>


      <CookieConsent 
        cookieName="AcceptAll"
        expires={30}
        className="cookie"

        style={{
          width: "100%",
          height: "100vh",
          borderRadius: "3vh", 
          zIndex: "999999",
          alignItems: "center",
          display: "grid",
          justifyContent:"center",
          paddingBottom: "3em",
          backgroundColor: "transparent",
          backdropFilter: "blur(20px)",
          fontSize: "3vh",
          fontWeight: "900"
          }}

        buttonStyle={{
            background: "#bf2d06",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px black",
            display: "flex",
            justifyContent: "center",
            fontSize: "2vh",
            width: "40vh",
            margin: "auto",
            padding: "0",         
            padding: "3vh",
            borderRadius: "10em"         
        }}
        contentStyle={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "4vh"
        }}
        >

          <div className="cookie"> {`
            By visiting this site you agree to our terms and conditions,
            privacy policy, confirm that you are 18 years old
            and accept the use of cookies
          `}
          </div>
        
        </CookieConsent>
    </div>
  );
};
