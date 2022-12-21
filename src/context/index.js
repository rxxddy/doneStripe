import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const retriveTokenOnInitialLoad = () => {
  const token = localStorage.getItem("token");
  return token;
};

const AuthProvider = ({ children }) => {
  const extractTokenOnInitialLoad = retriveTokenOnInitialLoad();

  let initialTokenValue = null;
  if (extractTokenOnInitialLoad !== null)
    initialTokenValue = extractTokenOnInitialLoad;
  const [token, setToken] = useState(initialTokenValue);
  const loginHandler = (token) => {
    console.log(token);
    localStorage.setItem("token", token);
    setToken(token);
  };
  const logoutHandler = () => {
      setToken(null)
      localStorage.removeItem('token')
  };
  const contextState = {
    token,
    isLoggedIn: token !== null && token !== "",
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextState}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
