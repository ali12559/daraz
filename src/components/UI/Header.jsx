import React, { useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { Link } from "react-router-dom";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
    <ul className="flex justify-center gap-5 bg-[#f85606] text-[#FFF] text-[18px] py-5">
      <Link to="#"><img className="w-[50%] cursor-pointer" src="src/assets/lgo.png" alt="" /></Link>
      <button onClick={() => setShowLogin(true)} className="cursor-pointer">Login</button>
      <button onClick={() => setShowSignup(true)} className="cursor-pointer">Sign Up</button>
    </ul>

      {showLogin && (
        <LoginModal
          closeModal={() => setShowLogin(false)}
          openSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <SignupModal
          closeModal={() => setShowSignup(false)}
          openLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
}

export default Header;
