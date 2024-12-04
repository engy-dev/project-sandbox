import React, { useState, useEffect } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "../assets/moon.jpg";
import HomeScreenImg from "../assets/home.jpg";

export default function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: "Swipe to unlock!",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
  });
  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState(0);

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value);
    console.log(e.target.value);
  };
  const lockScreen = () => {
    setLockSliderValue(0);
    setShowLockSlider(true);
    setUiProps({
      uiText: "Swipe to unlock!",
      uiColor: "#eee",
      uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
    });
  };

  useEffect(() => {
    document.body.style.background = "#999";
    if (lockSliderValue === "100") {
      setShowLockSlider(false);
      setLockSliderValue(0);
      setUiProps({
        uiText: "Tap to lock screen",
        uiColor: "#222",
        uiBg: `url(${HomeScreenImg}) center/cover no-repeat`,
      });
    }
  }, [lockSliderValue]);
  return (
    <div
      className="container text-center d-flex flex-column border-20 shadow-md slider"
      style={{
        background: uiProps.uiBg,
      }}
    >
      <h1 className="title" style={{ color: uiProps.uiColor }}>
        {" "}
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          width={"250px"}
          handleInput={handleLockSliderInput}
          value={lockSliderValue}
        />
      ) : (
        <AiFillUnlock className="unlockIcon" onClick={lockScreen} />
      )}
    </div>
  );
}
