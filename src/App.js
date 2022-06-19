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
import SignUp from "./Components/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/firebase";


function App() {
  const {state, dispatch} = useContext(StateContext);
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        dispatch({
          type:"set_user",
          user:user
        }) 
      } else {
        dispatch({
          type:"set_user",
          user:null
        })
      }
    })
  },[])
  console.log(state); 
  return (
    <>
        <Routes>
          {state.user && <Route exact path="/" element={<><Header/><Home /></>} />}
          {state.user && <Route exact path="checkout" element={<><Header/><Checkout /></>} />}
          {!state.user && <Route exact path="login" element={<Login />} />}
          {!state.user && <Route exact path="signup" element={<SignUp />} />}
        </Routes>
      
    </>

  );
}

export default App;
