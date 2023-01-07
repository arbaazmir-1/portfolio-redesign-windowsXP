import React, { useEffect } from "react";
import BottomNavbar from "../Components/BottomNavbar";
import "../scss/HomeScreen.scss";
import { useState, useRef } from "react";
import StartMenu from "../Components/StartMenu";
import ShutDownModal from "../Components/ShutDownModal";
import Pomodoro from "../Components/Pomodoro";
import Resume from "../Components/Resume";
const HomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [logout, setLogout] = useState(false);
  const [showPomo, setShowPomo] = useState(false);
  const [showResume, setShowResume] = useState(false);

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

  useEffect(() => {
    console.log(showMenu);
  }, [showMenu]);

  return (
    <div className="homeScreen">
      {showMenu && (
        <StartMenu
          logout={handleLogout}
          showMenu={handleShowMenu}
          showPomo={hidePomo}
          showResume={hideResume}
        />
      )}
      {logout && <ShutDownModal logout={handleLogout} />}
      {showPomo && <Pomodoro hidePomodoro={hidePomo} />}
      {showResume && <Resume hideResume={hideResume} />}
      <BottomNavbar onStartClick={handleShowMenu} />
    </div>
  );
};

export default HomeScreen;
