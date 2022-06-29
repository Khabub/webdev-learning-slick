import React, { Fragment } from "react";
import Products from "../../pages/Products";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "../../pages/About";
import Resource from "../../pages/Resource";
import Contact from "../../pages/Contact";

const Pages = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="products" />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resource />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
};

export default Pages;
