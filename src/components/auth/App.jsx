import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import Home from "../UI/Home";
import Login from "../UI/LoginModal";
import Signup from "../UI/SignupModal";
import { ProductDetails } from "../../pages/ProductDetails";

function App() {
  return (
    <>
      
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </Router>
      
    </>
  );
}

export default App;
