import React from "react";
import "../scss/Pomodoro.scss";
import { useState, useRef, useEffect } from "react";
import timerSound from "../audio/timer.mp3";

const Pomodoro = ({ hidePomodoro }) => {
  const [timeMinutes, setTimeMinutes] = useState(25);
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [timer, setTimer] = useState(`${timeMinutes}:${timeSeconds}0`);
  const [timerExists, setTimerExists] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [timerFinish, setTimerFinished] = useState(false);

  const hide = () => {
    hidePomodoro(false);
  };
  const [fullScreen, setFullScreen] = useState(false);

  const audioRef = useRef(null);

  const timerStarted = () => {
    setTimerOn(true);
    setTimerPaused(false);
    setTimerExists(true);
    setTimerFinished(false);
  };
  const timerStopped = () => {
    setTimerOn(false);
    setTimerPaused(true);
    setTimerExists(true);
    setTimerFinished(false);
  };
  const timerReset = () => {
    setTimerOn(false);
    setTimerPaused(false);
    setTimerFinished(false);
    setTimeMinutes(25);
    setTimeSeconds(0);
    setTimerExists(false);
  };
  const timerFinished = () => {
    setTimerOn(false);
    setTimerPaused(false);
    setTimerFinished(true);
    setTimeMinutes(25);
    setTimeSeconds(0);
    setTimerExists(false);
  };

  useEffect(() => {
    if (timerOn && !timerPaused) {
      const interval = setInterval(() => {
        if (timeSeconds > 0) {
          setTimeSeconds((prevSeconds) => prevSeconds - 1);
        } else if (timeMinutes > 0) {
          setTimeMinutes((prevMinutes) => prevMinutes - 1);
          setTimeSeconds(59);
        } else {
          timerFinished();
          audioRef.current.play();
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timerOn, timerPaused, timeMinutes, timeSeconds, timerFinished]);

  useEffect(() => {
    setTimer(`${timeMinutes}:${timeSeconds < 10 ? "0" : ""}${timeSeconds}`);
  }, [timeMinutes, timeSeconds]);

  return (
    <>
      <div
        className="appContainer"
        style={
          fullScreen
            ? {
                width: "100%",
                height: "100%",
              }
            : {
                width: "45%",
              }
        }
      >
        <div className="topBar">
          <div className="leftSide">
            <h2>Pomodoro</h2>
          </div>
          <div className="rightSide">
            <i className="fa fa-minus"></i>
            <i
              className="fa fa-expand"
              onClick={() => {
                setFullScreen(!fullScreen);
              }}
            ></i>
            <i
              className="fa fa-times"
              onClick={() => {
                setTimerOn(false);
                setTimerPaused(false);
                setTimerFinished(false);
                setTimeMinutes(25);
                setTimeSeconds(0);
                setTimerExists(false);
                hide();
              }}
            ></i>
          </div>
        </div>
        <div className="middleBar">
          <audio src={timerSound} ref={audioRef}></audio>
          <div className="bigTimer">{timer}</div>
          <div className="options">
            <div
              className="option"
              onClick={timerOn ? timerStopped : timerStarted}
            >
              <i className="fa fa-play"></i>
            </div>
            <div
              className="option"
              onClick={timerOn ? timerStopped : timerReset}
            >
              <i class="fa fa-pause"></i>
            </div>
            <div className="option" onClick={timerReset}>
              <i className="fa fa-stop"></i>
            </div>
          </div>
          <div className="timeOptions">
            <div
              className="timeOption"
              onClick={() => {
                setTimeMinutes(25);
                setTimeSeconds(0);
                setTimerExists(false);
                timerStarted();
              }}
            >
              <p>Work</p>
              <p>25:00</p>
            </div>
            <div
              className="timeOption"
              onClick={() => {
                setTimeMinutes(5);
                setTimeSeconds(0);
                setTimerExists(false);
                timerStarted();
              }}
            >
              <p>Short</p>
              <p>5:00</p>
            </div>
            <div
              className="timeOption"
              onClick={() => {
                setTimeMinutes(15);
                setTimeSeconds(0);
                setTimerExists(false);
                timerStarted();
              }}
            >
              <p>Long</p>
              <p>15:00</p>
            </div>
          </div>
          <div className="customTimer">
            <div className="customTimerOption">
              <input
                type="number"
                placeholder="Enter Your Time"
                onChange={(e) => {
                  if (!timerExists) {
                    setTimeMinutes(e.target.value);
                    setTimeSeconds(0);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pomodoro;
