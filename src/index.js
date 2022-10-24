import "./index.css";

import { Box } from "@mui/material";
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
        <Route path="/" element={<App />}>
          <Route path="/" element={<MovieList />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
