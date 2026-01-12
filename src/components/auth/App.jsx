import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import Home from "../UI/Home";
import Login from "../UI/LoginModal";
import Signup from "../UI/SignupModal";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
