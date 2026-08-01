import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/navbar.css";
import "./styles/dashboard.css";
import "./styles/statcard.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);