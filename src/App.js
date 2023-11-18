import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShopCars from "./pages/ShopCars";
import SellYourCar from "./pages/SellYourCar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/sell-your-car" element={<SellYourCar />} />
        <Route path="/" element={<ShopCars />} />
      </Routes>
    </div>
  );
};

export default App;
