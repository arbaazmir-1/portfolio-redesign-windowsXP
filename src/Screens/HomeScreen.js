import React, { useEffect } from "react";
import BottomNavbar from "../Components/BottomNavbar";
import "../scss/HomeScreen.scss";
import { useState, useRef } from "react";
import StartMenu from "../Components/StartMenu";
const HomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [logout, setLogout] = useState(false);

  const handleShowMenu = (value) => {
    setShowMenu(value);
  };
  const handleLogout = (value) => {
    setLogout(value);
  };
  useEffect(() => {
    console.log("logout", logout);
  }, [logout]);
  return (
    <div className="homeScreen">
      {showMenu && <StartMenu logout={handleLogout} />}

      <BottomNavbar onStartClick={handleShowMenu} />
    </div>
  );
};

export default HomeScreen;
