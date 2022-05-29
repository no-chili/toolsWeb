import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/App.css";
import { BrowserRouter } from "react-router-dom";
import "./mock/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
