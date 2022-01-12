import React, {  useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import { useStoreActions } from "easy-peasy";
import Bookmark from "./Pages/Bookmark/Bookmark";

function App() {
  const setCart = useStoreActions(state => state.drinks.setCart);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
