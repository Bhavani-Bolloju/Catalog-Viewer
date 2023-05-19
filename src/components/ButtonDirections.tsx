import React from "react";
import classes from "./ButtonDirections.module.scss";

// sliderHandler.bind(null, "left")
// sliderHandler.bind(null, "right")
interface SamplePropsOne {
  onLeftClick: () => void;
}
interface SamplePropsTwo {
  onRightClick: () => void;
}

type Props = SamplePropsOne & SamplePropsTwo;

const ButtonDirections: React.FC<Props> = (props) => {
  return (
    <div className={classes["svg-btns"]}>
      <div
        className={`${classes["svg"]} ${classes["svg--left"]}`}
        onClick={props.onLeftClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <div
        className={`${classes["svg"]} ${classes["svg--right"]}`}
        onClick={props.onRightClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={classes["svg--right"]}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default ButtonDirections;
