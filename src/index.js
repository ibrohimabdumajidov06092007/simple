import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { Naw } from "./components/nawbar/Naw";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        {/* <Route index element={<Naw />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
