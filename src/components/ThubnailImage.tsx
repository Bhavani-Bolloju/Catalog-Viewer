import React from "react";
import classes from "./ThubnailImage.module.scss";

interface SamplePropsOne {
  url: string;
}
interface SamplePropsTwo {
  active: boolean;
}

type Props = SamplePropsOne & SamplePropsTwo;

const ThubnailImage: React.FC<Props> = (props) => {
  console.log(props.active);
  return (
    <div
      className={`${classes["image"]} ${
        classes[`${props.active ? "image--active" : ""}`]
      }`}
    >
      <img src={props.url} alt="" />
    </div>
  );
};

export default ThubnailImage;
