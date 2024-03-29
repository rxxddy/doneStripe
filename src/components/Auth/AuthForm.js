import { useState, createRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import "./AuthForm.css";


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDUdOj-zVrEGRjs2icLM58-X4FSbUZCAhU",
//   authDomain: "himeros2-27067.firebaseapp.com",
//   projectId: "himeros2-27067",
//   storageBucket: "himeros2-27067.appspot.com",
//   messagingSenderId: "707660886902",
//   appId: "1:707660886902:web:3398279231de5906c2c057",
//   measurementId: "G-XH9CXXSVGL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const Account = () => {
  const { login } = useContext(AuthContext);
  const emailRef = createRef(null);
  const passwordRef = createRef(null);
  const navigate = useNavigate();
  navigate('/');
  const [showSignUpText, setShowSignUpText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // useEffect(() => {
    //   setIsLoading(true);
    // }, []);

    useEffect(() => {
       setIsLoading(true);
    }, [setIsLoading])

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
          useEffect(() => {
            if (response && response.ok) {
              setIsLoading(false);
              login(data.idToken);
              navigate.push("/");
            } else {
                setError(true); 
                setIsLoading(false);  
            }
          }, [setIsLoading, setError])
            } catch (e) {
              console.log(e);
            }
  };

  return (
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
  );
};

export default Account;

