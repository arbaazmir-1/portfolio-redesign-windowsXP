import React from "react";
import "../scss/StartMenu.scss";
import ImageTwo from "../images/imgTwo.webp";
import { useState, useRef, useEffect } from "react";

const StartMenu = ({ logout, showMenu, showPomo }) => {
  const [signOut, setSignOut] = useState(false);

  const ref = useRef(null);
  const handleSignOut = () => {
    setSignOut(!signOut);
    logout(signOut);
  };
  const showPomoDoro = () => {
    showPomo(true);
    showMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        event.target.tagName !== "P" &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        showMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
  return (
    <>
      <div className="startMenuContainer" ref={ref}>
        <div className="topBar">
          <img src={ImageTwo} alt="" />
          <p>Profile Two</p>
        </div>

        <div className="middleBar">
          <div className="leftSide">
            <div className="programs">
              <div className="program">
                <h2>My Resume</h2>
                <p>Downloadable Version</p>
              </div>
              <div className="program">
                <h2>My LinkedIn</h2>
                <p>My LinkedIn Profile</p>
              </div>
              <div className="divider"></div>
              <div className="program">
                <h2>My Github</h2>

                <p>My Github Profile</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="rightSide">
            <div className="programsRight">
              <p>Tidy Hands</p>
              <p>After School</p>
              <p>Lifeline</p>
              <p className="last">Neutronbuy</p>

              <div className="divider"></div>
              <p onClick={showPomoDoro}>Pomodoro</p>
              <p>My Tasks</p>
            </div>
          </div>
        </div>

        <div className="bottomBar">
          <div className="emptySide"></div>
          <div className="turnOffSide" onClick={handleSignOut}>
            <i className="fas fa-power-off"></i>
            <p>Turn Off Computer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartMenu;
