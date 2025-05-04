import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [featuredSkateboards, setFeaturedSkateboards] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeaturedSkateboards = async () => {
      try {
        const response = await axios.get(
          `https://skateboard-store-2.onrender.com/api/skateboards`
        );
        setFeaturedSkateboards(response.data.slice(0, 3)); // Limit to 3 featured skateboards
      } catch (err) {
        console.error("Error fetching skateboards:", err);
        setError("Failed to load featured skateboards.");
      }
    };

    fetchFeaturedSkateboards();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Steven's Skateboards</h1>
        <p>Your one-stop shop for all your skateboarding needs!</p>
      </div>
    </div>
  );
};

export default Home;