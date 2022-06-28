import React from "react";
import Products from "../../pages/Products";
import classes from "./Pages.module.css";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "../../pages/About";
import Resource from "../../pages/Resource";
import Contact from "../../pages/Contact";

const Pages = () => {
  return (
    <div className={classes.container}>
      <Routes>
        <Route path="/" element={<Navigate to="products" />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resource />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Pages;
