import React, { useState } from "react";
import "./Counter.css";
import { BiUpArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleUp = () => {
    setCount(count + 1);
  };
  const handleDown = () => {
    setCount(count - 1);
  };
  const handleLeft = () => {
    setCount(count - 10);
  };
  const handleRight = () => {
    setCount(count + 10);
  };
  return (
    <div className="container">
      <div>
        <BiUpArrow
          onClick={handleUp}
          style={{ color: "blue", cursor: "pointer" }}
        />
      </div>

      <div className="mid">
        <div>
          <BiLeftArrow
            onClick={handleLeft}
            style={{ color: "blue", cursor: "pointer" }}
          />
        </div>
        <div style={{ color: "red" }}>{count}</div>
        <div>
          {" "}
          <BiRightArrow
            onClick={handleRight}
            style={{ color: "blue", cursor: "pointer" }}
          />
        </div>
      </div>

      <div>
        <BiDownArrow
          onClick={handleDown}
          style={{ color: "blue", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};
export default Counter;
