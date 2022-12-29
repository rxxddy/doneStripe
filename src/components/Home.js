// import React from "react";
// import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from "react-router-dom";


// const Home = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
  
//   let handleLogOut = () => {
//     signOut(auth).then(() => {
//       // Sign-out successful.
//       navigate("/singin");
//     });
//   };
  
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log(auth.currentUser);
//     } else {
//       // User is signed out
//       navigate("/singin");
//     }
//   });
  

//   return (
//     <div className="home">
//       <button onClick={handleLogOut}>Log Out</button>
//       <h2>{auth.currentUser.displayName}</h2>
//       <h2>{auth.currentUser.displaySecondName}</h2>
//       <h2>{auth.currentUser.displayPhone}</h2>
//       <h2>{auth.currentUser.displayIndex}</h2>
//       <h2>{auth.currentUser.email}</h2>
//       <h2>{auth.currentUser.photoURL}</h2>
//       <h2>{auth.currentUser.uid}</h2>
//     </div>
//   );
// };

// export default Home;
