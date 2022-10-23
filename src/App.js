import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
