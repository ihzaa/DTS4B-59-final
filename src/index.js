import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import PrivateComponent from "./components/PrivateComponent";
import MovieList from "./components/MovieList";
import Login from "./auth/Login";
import Register from "./auth/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PrivateComponent loginOnly={true}>
            <App />
          </PrivateComponent>
        }>
        </Route>
        <Route
          path="login"
          element={
            <PrivateComponent loginOnly={false}>
              <Login />
            </PrivateComponent>
          }
        />
        <Route
          path="register"
          element={
            <PrivateComponent loginOnly={false}>
              <Register />
            </PrivateComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
