// App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Month from "./components/Month.jsx";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:month" element={<Month />} />
    </Routes>
  );
};

export default App;
