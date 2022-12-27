// import { useState, createRef, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context";
// import "../styles.css";
// import "../../src/components/components/css/styles.css";
// import logo from '../images/logo.png';
// import {Link} from "react-router-dom";

// const AuthForm = () => {
//   const { login } = useContext(AuthContext);
//   const emailRef = createRef(null);
//   const nameRef = createRef(null);
//   const passwordRef = createRef(null);
//   const navigate = useNavigate();
//   const [showSignUpText, setShowSignUpText] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     const extractCurrentNameValue = nameRef.current.value;
//     const extractCurrentEmailValue = emailRef.current.value;
//     const extractCurrentPasswordValue = passwordRef.current.value;
//     console.log(extractCurrentNameValue, extractCurrentEmailValue, extractCurrentPasswordValue);

//     let url = "";

//     if (showSignUpText) {
//       //sign up
//       url =
//         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAN4o99mH_pAL4gioZfwEa6vWzVYELJLf0";
//     } else {
//       //login
//       url =
//         "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAN4o99mH_pAL4gioZfwEa6vWzVYELJLf0";
//     }

//     const options = {
//       method: "POST",
//       body: JSON.stringify({
//         name: extractCurrentNameValue,
//         email: extractCurrentEmailValue,
//         password: extractCurrentPasswordValue,
//         returnSecureToken: true,
//       }),
//       "content-type": "application/json",
//     };

//     try {
//       const response = await fetch(url, { ...options });
//       const data = await response.json();
//       console.log(response);
//       if (response && response.ok) {
//         setIsLoading(false);
//         login(data.idToken);
//         navigate("/");
//       } else {
//         setError(true);
//         setIsLoading(false);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (      
//     <div className="main-container2">
//       <div className="main-container3">
//         <div className="accountLeft">
//           <div className="insideLeft">

//             <div className="hideonmobile">
//               <div className="insideLefttext">Invite Only Right now</div>
//               <div className="insideLefttext2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text   ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
//               <Link to="/" className="insideLefttext">Home➤</Link>
//             </div>
//           </div>
//         </div>
//         <div className="accountRight">
//           <section className="auth">
//             <h1>{showSignUpText ? "Sign Up" : "Log in"}</h1>
//             <form onSubmit={handleFormSubmit}>
//               <div className="control">
//                 <label htmlFor="name">Name</label>
//                 <input ref={nameRef} required type="name" id="name" />
//               </div>
//               <div className="control">
//                 <label htmlFor="email">Email</label>
//                 <input ref={emailRef} required type="email" id="email" />
//               </div>
//               <div className="control">
//                 <label htmlFor="password">Password</label>
//                 <input ref={passwordRef} required type="password" id="password" />
//               </div>
//               <div className="actions">
//                 {isLoading ? (
//                   "Loading. Please Wait..."
//                 ) : (
//                   <button className="sendinfo">{showSignUpText ? "Sign Up" : "Log in"}</button>
//                 )}
//                 <div style={{fontSize: "large"}} > or </div>
//                 <button
//                   type="button"
//                   className="toggle"
//                   onClick={() => setShowSignUpText(!showSignUpText)}
//                 >
//                   {showSignUpText
//                     ? "Login with existing account"
//                     : "Create new account"}
//                 </button>
//               </div>
//               <div style={{ padding: "20px 0px 0px 0px", fontSize: "18px" }}>
//                 {error && "Authentication failed ! Please try again"}
//               </div>
//             </form>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
