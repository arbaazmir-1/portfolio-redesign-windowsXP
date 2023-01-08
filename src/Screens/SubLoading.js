import React, { useEffect } from "react";
import "../scss/SubLoading.scss";
import { Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import logOff from "../audio/logoff.mp3";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logon from "../audio/logon.mp3";

const SubLoading = () => {
  const location = useLocation();
  const message = location.state.message;
  const audioOut = useRef(new Audio(logOff));
  const navigate = useNavigate();
  const audioLog = useRef(new Audio(logon));

  useEffect(() => {
    if (message === "Logging Out") {
      audioOut.current.play();
      setTimeout(() => {
        navigate("/welcome");
      }, 4000);
    }
    if (message === "Logging In") {
      audioLog.current.play();
      setTimeout(() => {
        navigate("/home");
      }, 4000);
    }
    if (message === "Restarting") {
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }
  }, [message]);

  return (
    <>
      <div className="welcomeContainer">
        <div className="topBar"></div>
        <div className="middleBar">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Unofficial_fan_made_Windows_XP_logo_variant.svg/2560px-Unofficial_fan_made_Windows_XP_logo_variant.svg.png"
              alt=""
            />
            <Text m={5}>{message ? message : "Loading..."}</Text>
          </div>
        </div>
        <div className="bottomBar">
          <div className="containerBottom"></div>
        </div>
      </div>
    </>
  );
};

export default SubLoading;
