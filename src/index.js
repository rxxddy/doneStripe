import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './styles.css';
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./context";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>
    ,
  rootElement
);

