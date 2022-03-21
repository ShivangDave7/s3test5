import React from "react";
import BuymeaCoffee from "pages/BuymeaCoffee";
import Contact from "pages/Contact";
import AbstractSignUp from "pages/AbstractSignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AbstractSignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buymeacoffee" element={<BuymeaCoffee />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
