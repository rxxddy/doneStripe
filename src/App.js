import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AuthForm from "./components/Auth/AuthForm";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Account from "./components/Account";
import CookieConsent from "react-cookie-consent";
import Layout from "./components/Layout/Layout";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route index element={<Checkout />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
              <Route path="account" element={<Account />} />
              {/* <Route path="auth" element={<AuthForm />} /> */}
            </Routes>
          </Router>


      <CookieConsent 
        debug={true} 
        style={{
          width: "100%",
          height: "100vh",
          borderRadius: "2em 2em 0 0", 
          zIndex: "999999",
          alignItems: "center",
          display: "grid",
          justifyContent:"center",
          paddingBottom: "3em",
          backgroundColor: "transparent",
          backdropFilter: "blur(20px)",
          fontSize: "xx-large"
          
          }}

        buttonStyle={{
            background: "#bf2d06",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px black",
            display: "flex",
            justifyContent: "center",
            fontSize: "initial",
            width: "40%",
            marginLeft: "30%",
            padding: "0",         
            padding: "3em",
            borderRadius: "10em"         
        }}
        contentStyle={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "xx-large"
        }}
        
        >

          <div style={{maxWidth: "65%"}}> {`
            By visiting this site you agree to our terms and conditions,
            privacy policy, confirm that you are 18 years old
            and accept the use of cookies
          `}
          </div>
        
        </CookieConsent>
    </div>
  );
};
