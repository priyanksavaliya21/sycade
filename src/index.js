import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "simplebar-react/dist/simplebar.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/index.css";
import "./Css/Responsive.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/Common/ScrolltoTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
