import React from "react";
import classes from "./Image.module.scss";

type Props = {
  url: string;
  id: number;
  title: string;
};

const Image: React.FC<Props> = (props) => {
  return (
    <div className={classes["catalog-image"]}>
      <img src={props.url} alt="image" />
      <div className={classes["catalog-heading"]}>
        <span>{props.id}.</span>
        <span>{props.title}</span>
      </div>
    </div>
  );
};
export default Image;
