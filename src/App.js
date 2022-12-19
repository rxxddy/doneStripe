import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Account from "./components/Account";
import CookieConsent from "react-cookie-consent";

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
        </Routes>
      </Router>
      <CookieConsent 
        debug={true} 
        style={{
          width: "50%", 
          marginLeft: "25%", 
          borderRadius: "2em 2em 0 0", 
          zIndex: "999999",
          }}

        buttonStyle={{
            background: "#bf2d06",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px black",
        }}>
          <div style={{maxWidth: "50%"}}> {`
            By visiting this site you agree to our terms and conditions,
            privacy policy, confirm that you are 18 years old
            and accept the use of cookies
          `}
          </div>
        
        </CookieConsent>
    </div>
  );
};
