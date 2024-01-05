import { Routes, Route, Outlet, Link } from "react-router-dom";

import "./App.css";
import Home from "./components/Home.jsx";
import MonthDetails from "./components/MonthDetails.jsx";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="Enero" element={<MonthDetails />} />
      <Route path="Febrero" element={<MonthDetails />} />
    </Routes>
  );
};

export default App;
