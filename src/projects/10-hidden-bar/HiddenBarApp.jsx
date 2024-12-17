import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

export default function HiddenBarApp() {
  const [uiProps, setUiProps] = useState({
    bg: "pink",
    shadow: "",
    transitions: "all .6s ease",
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: "#fff",
  });
  const inputEl = useRef(null);
  useEffect(() => {
    document.body.style.background = uiProps.bg;
    document.body.style.boxShadow = uiProps.shadow;
    document.body.style.transition = uiProps.transitions;
    if (uiProps.showSearchBar && inputEl.current) {
      inputEl.current.focus();
    }
  }, [uiProps]);

  let inputStyle = {
    margin: "10vh 25vw",
    width: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `1px solid ${uiProps.borderBottomColor}`,
    fontSize: "1.3rem",
    color: "#eee",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,.75)",
    opacity: uiProps.opacity,
    transition: "all .6s ease",
  };

  let bsSearchStyle = {
    color: "#fff",
    fontSize: 50,
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
  };

  const showBar = () => {
    setUiProps((prev) => ({
      ...prev,
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true,
    }));
  };

  const handleBarFocus = () => {
    setUiProps((prev) => ({
      ...prev,
      shadow: "inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)",
      borderBottomColor: "#5554a6",
    }));
  };

  const handleSearchBlur = (e) => {
    setUiProps((prev) => ({
      ...prev,
      shadow: "none",
      opacity: 0,
      borderBottomColor: "#fff",
      showSearchIcon: true,
    }));
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      {uiProps.showSearchIcon ? (
        <BsSearch style={bsSearchStyle} onClick={showBar} />
      ) : (
        <input
          type="text"
          placeholder="search"
          style={inputStyle}
          onFocus={handleBarFocus}
          onBlur={handleSearchBlur}
          ref={inputEl}
        />
      )}
    </div>
  );
}
