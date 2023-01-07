import React from "react";
import "../scss/ShutDownModal.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShutDownModal = ({ logout }) => {
  const [showModal, setShowModal] = useState(false);

  const cancelLougout = () => {
    logout(false);
  };
  const navigator = useNavigate();

  const onRestart = () => {
    navigator("/");
  };
  const onLougout = () => {
    navigator("/welcome");
  };

  return (
    <>
      <div className="modalContainer">
        <div className="innerContainer">
          <div className="topBar">
            <h2>Turn Off Computer</h2>
          </div>

          <div className="middleBar">
            <div className="options">
              <div className="option">
                <i className="fas fa-power-off"></i>
                <p>Turn Off</p>
              </div>
              <div
                className="option"
                onClick={() => {
                  onLougout();
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
                <p>Log Out</p>
              </div>
              <div
                className="option"
                onClick={() => {
                  onRestart();
                }}
              >
                <i className="fas fa-redo-alt"></i>
                <p>Restart</p>
              </div>
            </div>
          </div>

          <div className="bottomBar">
            <div className="cancel">
              <button
                onClick={() => {
                  cancelLougout();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShutDownModal;
