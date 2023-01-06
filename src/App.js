import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
