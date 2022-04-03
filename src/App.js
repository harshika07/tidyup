import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Register from "./Register";
import NotFound from "./NotFound";
import Login from "./Login";
import DryClean from "./DryClean";
import Wash from "./Wash";
import Iron from "./Iron";
import Laundry from "./Laundry";
import Profile from "./Profile";
import Footer from "./Components/Footer";
import { AuthProvider } from "./Firebase/AuthContext";
import { db } from "./Firebase/Firebase";
import Shipping from "./Shipping";
import UpdateProfile from "./UpdateProfile";

function App() {
  const [role, setRole] = useState("user");
  const getRole = async (userId) => {
    try {
      const response = await db.collection("users").doc(userId).get();
      console.log("response", response);

      let data = { title: "not found" };

      if (response.exists) {
        console.log("found it");
        data = response.data("role");
        console.log("inside " + data);
      }
      setRole(data);
      console.log("changed role to" + role);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service/dryclean" element={<DryClean />} />
          <Route path="/service/wash" element={<Wash />} />
          <Route path="/service/iron" element={<Iron />} />
          <Route path="/service/laundry" element={<Laundry />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
