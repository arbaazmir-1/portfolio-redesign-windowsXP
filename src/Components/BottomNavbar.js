import React from "react";
import { useEffect, useState } from "react";
import "../scss/BottomNavbar.scss";

const BottomNavbar = ({ onStartClick }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
    onStartClick(showMenu);
  };

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      //get time in am pm format

      let time = new Date().toLocaleTimeString();
      setTime(time);
    }, 1000);
  }, []);

  return (
    <>
      <div className="navbarContainer">
        <div className="startButton" onClick={handleClick}>
          <p>Start</p>
        </div>

        <div className="leftSide">
          <i className="fas fa-microphone-alt"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-full"></i>
          <p>{time}</p>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
