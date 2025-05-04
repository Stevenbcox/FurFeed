import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
// import Register from "./pages/Register";
// import User from "./pages/User"; // Login page
// import AdminLogin from "./pages/AdminLogin"; // Admin Login page
// import AdminDashboard from "./pages/AdminDashboard"; // Admin Dashboard page
// import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default App;