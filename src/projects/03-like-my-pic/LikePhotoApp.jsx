import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import Scoob from "../assets/smol scooby.jpg";

function LikePhotoApp() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };
  return (
    <div className="container text-center">
      <Title text={"Like Photo App"} />
      <Title classes={"subtitle"} text={`Likes ${count}`} />
      <div
        className="card card-dark m-auto shadow-md"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>ScoobyDoo</small>
        </div>
        <img
          src={Scoob}
          alt="doggo"
          style={{ height: "fit-content" }}
          onDoubleClick={toggleLike}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />{" "}
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LikePhotoApp;
