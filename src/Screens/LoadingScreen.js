import React from "react";
import "../scss/LoadinScreen.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const LoadingScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/welcome");
    }, 3000);
  }, []);

  return (
    <>
      <div className="loadingContainer">
        <div className="window">
          <div className="logo">
            <p className="top">Microsoft</p>
            <p className="mid">
              Windows<span>XP</span>
            </p>
            <p className="bottom">Professional</p>
          </div>
          <div className="container">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
