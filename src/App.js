import Header from "./Components/Header";
import Home from "./Components/Home";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Checkout from "./Components/Checkout";

import { useEffect, useContext } from "react";
import StateContext from "./Context/StateContext";
import Login from "./Components/Login";
function App() {

  return (
    <>
        
        <Routes>
          <Route exact path="/" element={<><Header/><Home /></>} />
          <Route exact path="checkout" element={<><Header/><Checkout /></>} />
          <Route exact path="login" element={<Login />} />
        </Routes>
      
    </>

  );
}

export default App;
