import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Month from "./components/Month";
import NavInterna from "./components/NavInterna";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<NavInterna />}>
          <Route path="/:month" element={<Month />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
