import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiComment } from "react-icons/bi";

const TestimonialsApp = () => {
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (testimonials) {
      fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    }
  }, [testimonials]);

  return (
    <div className="container m-auto">
      <Title text={"Testimonials App"} />
      <Button
        text={"Posts"}
        btnClass="btn-info"
        icon={<BsFillFileEarmarkPostFill className="mr-1" />}
        onClick={() => setTestimonials("posts")}
      />
      <Button
        text={"Users"}
        btnClass="btn-info"
        icon={<FaUserAlt className="mr-1" />}
        onClick={() => setTestimonials("users")}
      />
      <Button
        text={"Comments"}
        btnClass="btn-info"
        icon={<BiComment className="mr-1" />}
        onClick={() => setTestimonials("comments")}
      />
      <Title
        classes={"subtitle text-primary"}
        text={!testimonials ? "Select from above" : testimonials}
      />
      {!items
        ? null
        : items.map((item) => (
            <div key={item.id} className="card card-primary mb-2">
              {item.name && <h2 className="card-header"> {item.name}</h2>}
              <div className="card-body">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
              {item.email && (
                <small className="card-footer"> {item.email}</small>
              )}
            </div>
          ))}
    </div>
  );
};

export default TestimonialsApp;
