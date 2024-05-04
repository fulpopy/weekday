import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FiltersProvider from "./Context/FiltersProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>
);
