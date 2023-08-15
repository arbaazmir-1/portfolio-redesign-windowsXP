import React, { useEffect } from "react";
import BottomNavbar from "../Components/BottomNavbar";
import "../scss/HomeScreen.scss";
import { useState, useRef } from "react";
import StartMenu from "../Components/StartMenu";
import ShutDownModal from "../Components/ShutDownModal";
import Pomodoro from "../Components/Pomodoro";
import TidyHands from "../Components/TidyHands";
const HomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [logout, setLogout] = useState(false);
  const [showPomo, setShowPomo] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showTidy, setShowTidy] = useState(false);

  const hideTidy = (value) => {
    setShowTidy(value);
  };

  const hidePomo = (value) => {
    setShowPomo(value);
  };

  const hideResume = (value) => {
    setShowResume(value);
  };

  const handleShowMenu = (value) => {
    setShowMenu(value);
  };
  const handleLogout = (value) => {
    setLogout(value);
    if (value === true) {
      setShowMenu(false);
    }
  };

  return (
    <div className="homeScreen">
      {showMenu && (
        <StartMenu
          logout={handleLogout}
          showMenu={handleShowMenu}
          showPomo={hidePomo}

          showTidy={hideTidy}
        />
      )}
      {logout && <ShutDownModal logout={handleLogout} />}
      {showPomo && <Pomodoro hidePomodoro={hidePomo} />}

      
      {showTidy && <TidyHands hideTidy={hideTidy} />}

      <BottomNavbar onStartClick={handleShowMenu} />
    </div>
  );
};

export default HomeScreen;
