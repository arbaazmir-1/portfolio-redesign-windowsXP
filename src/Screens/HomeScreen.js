import React, { useEffect } from "react";
import BottomNavbar from "../Components/BottomNavbar";
import "../scss/HomeScreen.scss";
import { useState, useRef } from "react";
import StartMenu from "../Components/StartMenu";
const HomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (value) => {
    setShowMenu(value);
  };
  return (
    <div className="homeScreen">
      {showMenu && <StartMenu />}

      <BottomNavbar onStartClick={handleShowMenu} />
    </div>
  );
};

export default HomeScreen;
