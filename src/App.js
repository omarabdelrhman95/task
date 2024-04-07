import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Comparing from "./pages/Comparing";
import Facebook from "./pages/Facebook";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/comparing" element={<Comparing />} />
        <Route path="/facebook" element={<Facebook />} />
      </Routes>
    </>
  );
};

export default App;
