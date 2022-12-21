import { useState, createRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import "./AuthForm.css";
import "../styles.css";
import "../../src/components/components/css/styles.css";
import logo from '../images/logo.png';
const AuthForm = () => {
  const { login } = useContext(AuthContext);
  const emailRef = createRef(null);
  const passwordRef = createRef(null);
  const navigate = useNavigate();
  const [showSignUpText, setShowSignUpText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const extractCurrentEmailValue = emailRef.current.value;
    const extractCurrentPasswordValue = passwordRef.current.value;
    console.log(extractCurrentEmailValue, extractCurrentPasswordValue);

    let url = "";

    if (showSignUpText) {
      //sign up
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAN4o99mH_pAL4gioZfwEa6vWzVYELJLf0";
    } else {
      //login
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAN4o99mH_pAL4gioZfwEa6vWzVYELJLf0";
    }

    const options = {
      method: "POST",
      body: JSON.stringify({
        email: extractCurrentEmailValue,
        password: extractCurrentPasswordValue,
        returnSecureToken: true,
      }),
      "content-type": "application/json",
    };

    try {
      const response = await fetch(url, { ...options });
      const data = await response.json();
      console.log(response);
      if (response && response.ok) {
        setIsLoading(false);
        login(data.idToken);
        navigate("/");
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (      
    <div className="main-container">
      <div className="section">
                          
          <div className="block mains">
              <div className="container2 mains center">

                  <div className="section22 navbar vercent">


                          <div className="left1">
                              <div className="left">
                                  <p className="navlink1 navlink2 ">MAIN</p>
                              </div>


                              
                          </div>
                    
                          <a className="nav_logo    center">
                              <img src={logo} className="nav_logo-img"/>
                          </a>


                          <div className="right1">
                              


                              <div className="right">
                                  <p className="navlink1 ">INFO</p>
                              </div>
                          </div>
                    


                  </div>
              </div>
          </div>
      </div>
      <div style={{backgroundColor: "wheat"}}>
        <div className="accountLeft">
          hello
        </div>
        <div className="accountRight">
          <section className="auth">
            <h1>{showSignUpText ? "SignUp" : "Login"}</h1>
            <form onSubmit={handleFormSubmit}>
              <div className="control">
                <label htmlFor="email">Email</label>
                <input ref={emailRef} required type="email" id="email" />
              </div>
              <div className="control">
                <label htmlFor="password">Password</label>
                <input ref={passwordRef} required type="password" id="password" />
              </div>
              <div className="actions">
                {isLoading ? (
                  "Loading. Please Wait..."
                ) : (
                  <button>{showSignUpText ? "SignUp" : "Login"}</button>
                )}
                <button
                  type="button"
                  className="toggle"
                  onClick={() => setShowSignUpText(!showSignUpText)}
                >
                  {showSignUpText
                    ? "Login with existing account"
                    : "Create new account"}
                </button>
              </div>
              <div style={{ padding: "20px 0px 0px 0px", fontSize: "18px" }}>
                {error && "Authentication failed ! Please try again"}
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
