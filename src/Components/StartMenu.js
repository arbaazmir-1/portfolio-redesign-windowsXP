import React from "react";
import "../scss/StartMenu.scss";
import ImageTwo from "../images/imgTwo.webp";

const StartMenu = () => {
  return (
    <>
      <div className="startMenuContainer">
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
          <div class="divider"></div>
          <div className="rightSide">
            <div className="programsRight">
              <p>Tidy Hands</p>
              <p>After School</p>
              <p>Lifeline</p>
              <p>Neutronbuy</p>
            </div>
          </div>
        </div>

        <div className="bottomBar">
          <div className="emptySide"></div>
          <div className="turnOffSide">
            <i className="fas fa-power-off"></i>
            <p>Turn Off Computer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartMenu;
