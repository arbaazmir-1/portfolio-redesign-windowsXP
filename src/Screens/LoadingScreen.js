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
        <div class="window">
          <div class="logo">
            <p class="top">Microsoft</p>
            <p class="mid">
              Windows<span>XP</span>
            </p>
            <p class="bottom">Professional</p>
          </div>
          <div class="container">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
