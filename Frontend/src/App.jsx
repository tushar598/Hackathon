import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Portfolio from "./pages/Portfolio";
import Forgot from "./pages/Forgot";
import FrontPage from "./pages/FrontPage";
import NotFound from "./pages/NotFound";
import Feedback from "./pages/Feedback";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (

    <Routes>
      
       <Route path="/" element={<FrontPage/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="*" element={<NotFound/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/feedback" element={<Feedback />}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes> 
   
   
  );
};

export default App;
