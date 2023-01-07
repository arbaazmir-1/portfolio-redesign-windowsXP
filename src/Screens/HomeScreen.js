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
  //future drag and drop
  // const ref = useRef(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  // const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseDown = (event) => {
  //     setIsDragging(true);
  //     setInitialPosition({ x: event.clientX, y: event.clientY });
  //   };

  //   const handleMouseUp = () => {
  //     setIsDragging(false);
  //     setInitialPosition({ x: 0, y: 0 });
  //   };

  //   const handleMouseMove = (event) => {
  //     if (isDragging) {
  //       setCurrentPosition({
  //         x: event.clientX - initialPosition.x,
  //         y: event.clientY - initialPosition.y,
  //       });
  //     }
  //   };

  //   ref.current.addEventListener("mousedown", handleMouseDown);
  //   window.addEventListener("mouseup", handleMouseUp);
  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     ref.current.removeEventListener("mousedown", handleMouseDown);
  //     window.removeEventListener("mouseup", handleMouseUp);
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [isDragging, initialPosition]);

  // const style = {
  //   transform: `translate(${currentPosition.x}px, ${currentPosition.y}px)`,
  // };

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
