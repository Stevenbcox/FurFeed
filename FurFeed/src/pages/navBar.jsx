import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token in useEffect:", token); // Debug log
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  const handleLogout = () => {
    console.log("Logging out..."); // Debug log
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  console.log("isLoggedIn state:", isLoggedIn); // Debug log

  return (
    <nav className="navbar">
      <h1 className="logo">Steven's Skateboards</h1>
      <div className="nav-buttons">
        <Link to="/" className="nav-button">
          Home
        </Link>
        <Link to="/skateboards" className="nav-button">
          Skateboards
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/account" className="nav-button">
              Account
            </Link>
            <button onClick={handleLogout} className="nav-button logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">
              Login
            </Link>
            <Link to="/register" className="nav-button">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;