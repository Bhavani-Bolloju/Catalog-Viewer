import React from "react";
import classes from "./ControlButtons.module.scss";

interface SamplePropsOne {
  isPlaying: boolean;
}
interface SamplePropsTwo {
  onPlay: () => void;
}

type Props = SamplePropsOne & SamplePropsTwo;

const ControlButtons: React.FC<Props> = (props) => {
  return (
    <div className={classes["control-btns"]}>
      {!props.isPlaying && (
        <button className={classes["btn--play"]} onClick={props.onPlay}>
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
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </button>
      )}
      {props.isPlaying && (
        <button className="btn--pause" onClick={props.onPlay}>
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
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ControlButtons;
