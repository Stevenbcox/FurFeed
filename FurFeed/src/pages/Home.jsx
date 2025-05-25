import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [homeFeed, setHomeFeed] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHomeFeed = async () => {
      try {
        const response = await axios.get(
          // `NEED TO FILL OUT `
        );
        setHomeFeed(response.data.slice(0, 3)); // Limit to 3 featured skateboards
      } catch (err) {
        console.error("Error: 420!", err);
        setError("Error: 420");
      }
    };

    fetchHomeFeed();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;