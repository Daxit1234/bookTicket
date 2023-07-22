import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgress = ({rating}) => {
  return (
    < >
     <CircularProgressbar maxValue={10} value={rating} text={`${rating}`} />
    </>
  );
};

export default CircleProgress;
