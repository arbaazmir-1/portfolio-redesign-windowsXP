import React, { useEffect } from "react";
import BottomNavbar from "../Components/BottomNavbar";
import "../scss/HomeScreen.scss";
import { useState, useRef } from "react";
import StartMenu from "../Components/StartMenu";
import ShutDownModal from "../Components/ShutDownModal";
import Pomodoro from "../Components/Pomodoro";
const HomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [logout, setLogout] = useState(false);
  const [showPomo, setShowPomo] = useState(false);

  const hidePomo = (value) => {
    setShowPomo(value);
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
        />
      )}
      {logout && <ShutDownModal logout={handleLogout} />}
      {showPomo && <Pomodoro hidePomodoro={hidePomo} />}
      <BottomNavbar onStartClick={handleShowMenu} />
    </div>
  );
};

export default HomeScreen;
