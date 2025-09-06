import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import WeatherDetails from "./components/WeatherDetails.jsx";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:city" element={<WeatherDetails />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
