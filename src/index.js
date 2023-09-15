import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./pages/landing/landing.css";
import "./pages/about/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/contact/contact.css";
import "./pages/404/pageNotFound.css";

import App from "./App";

//import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <App />
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
