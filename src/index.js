import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateComponent from "./components/PrivateComponent";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./containers/Home";
import DetailMovie from "./containers/DetailMovie";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PrivateComponent loginOnly={true}>
              <Home />
            </PrivateComponent>
          }>
          </Route>
          <Route path="movie/:id" element={
            <PrivateComponent loginOnly={true}>
              <DetailMovie />
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
    </ThemeProvider>
  </React.StrictMode>
);
