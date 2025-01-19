import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleSignOut = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    alert("You have been signed out.");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white shadow-lg">
      {/* Left side navigation links */}
      <ul className="flex space-x-6 text-lg font-medium">
        <li className="hover:text-gray-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="/Basket">Basket</Link>
        </li>
        {!isLoggedIn && (
          <>
            <li className="hover:text-gray-300">
              <Link to="/Login">Login</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/SignUpPage">Sign Up</Link>
            </li>
          </>
        )}
      </ul>

      {isLoggedIn && (
        <button
          onClick={handleSignOut}
          className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 shadow-md"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}

export default Navbar;
