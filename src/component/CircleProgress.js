import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgress = ({ rating }) => {
  return (
    <>
      <CircularProgressbar
        maxValue={10}
        value={rating}
        text={`${rating}`}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </>
  );
};

export default CircleProgress;
