import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeScreen from "./Screens/WelcomeScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
