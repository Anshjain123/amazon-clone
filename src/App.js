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
function App() {

  return (
    <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="checkout" element={<Checkout />} />
        </Routes>
      
    </>

  );
}

export default App;
