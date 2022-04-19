import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ScootersProvider from "./store/scooter-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ScootersProvider>
    <App />
  </ScootersProvider>
);
