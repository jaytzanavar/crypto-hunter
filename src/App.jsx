import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header";
import Homepage from "./Pages/Homepage";
import Coins from "./Pages/Coins";

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("intro");
  }, []);

  return (
    // <div
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<Coins />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
