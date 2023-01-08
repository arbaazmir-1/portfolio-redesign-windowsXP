import React from "react";
import pdf from "../pdf/resume.pdf";
import "../scss/Resume.scss";
import { useState } from "react";

const Resume = ({ hideResume }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const hide = () => {
    hideResume(false);
  };

  const fullScreenToggle = () => {
    setFullScreen(!fullScreen);
  };
  const downloadResume = () => {
    window.open(pdf);
  };

  return (
    <>
      <div
        className="resumeContainer"
        style={
          fullScreen
            ? {
                width: "100%",
                height: "100%",
                margin: "0",
              }
            : {
                width: "45%",
              }
        }
      >
        <div className="topBar">
          <div className="leftSide">
            <h2 style={{ userSelect: "none" }}>Resume</h2>
          </div>
          <div className="rightSide">
            <i className="fa fa-download" onClick={downloadResume}></i>

            <i className="fa fa-minus"></i>
            <i
              className="fa fa-expand"
              onClick={() => {
                fullScreenToggle();
              }}
            ></i>
            <i className="fa fa-times" onClick={hide}></i>
          </div>
        </div>
        <div className="restOfBody">
          <iframe src={pdf} />
        </div>
      </div>
    </>
  );
};

export default Resume;
