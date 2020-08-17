import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
// import { BrowserRouter }
import { BrowserRouter } from "react-router-dom";
// import { CookiesProvider } from 'react-cookie';
import { CookiesProvider } from "react-cookie";
// import 'semantic-ui-css/semantic.min.css' abc
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
