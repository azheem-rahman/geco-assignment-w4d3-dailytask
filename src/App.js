import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />

        <Routes></Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
