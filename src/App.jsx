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
      <Route path="Marzo" element={<MonthDetails />} />
      <Route path="Abril" element={<MonthDetails />} />

      <Route path="Mayo" element={<MonthDetails />} />
      <Route path="Junio" element={<MonthDetails />} />
      <Route path="Julio" element={<MonthDetails />} />
      <Route path="Agosto" element={<MonthDetails />} />

      <Route path="Septiembre" element={<MonthDetails />} />
      <Route path="Octubre" element={<MonthDetails />} />
      <Route path="Noviembre" element={<MonthDetails />} />
      <Route path="Diciembre" element={<MonthDetails />} />
    </Routes>
  );
};

export default App;
