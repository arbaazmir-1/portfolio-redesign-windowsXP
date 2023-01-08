import React, { useState } from "react";
import "../scss/TidyHands.scss";

const TidyHands = ({ hideTidy }) => {
  const hide = () => {
    hideTidy(false);
  };
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div
      className="appContainer"
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
          <h2 style={{ userSelect: "none" }}>Tidy Hands</h2>
        </div>
        <div className="rightSide">
          <i className="fa fa-minus"></i>
          <i
            className="fa fa-expand"
            onClick={() => {
              setFullScreen(!fullScreen);
            }}
          ></i>
          <i className="fa fa-times" onClick={hide}></i>
        </div>
      </div>
      <div className="restOfBody">
        <div className="appDetails">
          <a href="https://vercel-tidy-hands.vercel.app/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="105"
              height="78"
              viewBox="0 0 105 78"
            >
              <text
                id="TIDY_HANDs"
                data-name="TIDY
HANDs"
                transform="translate(0 32)"
                fill="#ff6584"
                font-size="33"
                font-family="'\.AppleSystemUIFont'"
                font-weight="300"
              >
                <tspan x="0" y="0">
                  T
                </tspan>
                <tspan y="0" fill="#211d1d">
                  IDY
                </tspan>
                <tspan x="0" y="39">
                  H
                </tspan>
                <tspan y="39" fill="#211d1d">
                  ANDs
                </tspan>
              </text>
            </svg>
          </a>

          <p>
            Tidy Hands is a platform designed to connect individuals and
            businesses with local service providers. Whether you need help with
            a one-time task or ongoing support, Tidy Hands makes it easy to find
            reliable and trustworthy professionals in your area. From home
            cleaning and maintenance to lawn care and event planning, Tidy Hands
            has a wide range of services available to suit your needs.
          </p>
          <h5>Technologies Used</h5>
          <ol>
            <li>React</li>
            <li>Node</li>
            <li>Vercel</li>
            <li>SASS</li>
            <li>MongoDb</li>
            <li>Serverless function</li>
          </ol>
          <h5>Features</h5>
          <ol>
            <li>Search for local service providers</li>
            <li>Filter search results by category</li>
            <li>View service provider profiles</li>
            <li>Book appointments</li>
            <li>View upcoming appointments</li>
            <li>View past appointments</li>
            <li>Rate service providers</li>
            <li>View ratings and reviews</li>
            <li>Auth</li>
            <li>CRUD</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TidyHands;
