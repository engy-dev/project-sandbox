import React from "react";
import Title from "../components/Title";

const RandomizeColor = () => {
  /* function handleClick(e) {

  }  */
  const handleClick = (e) => {
    let body = document.querySelector("body");
    body.style.background = colorRandomizer();
    e.target.style.backgroundColor = colorRandomizer();
  };
  function colorRandomizer() {
    let letters = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    return hex;
  }
  return (
    <div className="container m-auto text-center">
      <Title text={"Randomize Color"} classes={"mb-4"} />
      <button className="btn btn-danger" onClick={handleClick}>
        Click me
      </button>
      <button className="btn btn-success" onClick={handleClick}>
        Click me
      </button>
      <button className="btn btn-warning" onClick={handleClick}>
        Click me
      </button>
      <button className="btn btn-primary" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default RandomizeColor;
