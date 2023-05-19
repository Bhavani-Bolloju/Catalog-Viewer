import React from "react";
import classes from "./Image.module.scss";

interface SamplePropsOne {
  url: string;
}
// interface SamplePropsTwo {
//   active: boolean;
// }

// type Props = SamplePropsOne & SamplePropsTwo;
type Props = {
  url: string;
};

const Image: React.FC<Props> = (props) => {
  // console.log(props.active);

  // let activeImage = `${classes["catalog-image"]} ${classes["inactive"]}`;
  // if (props.active) {
  //   activeImage = `${classes["catalog-image"]} ${classes["active"]}`;
  // }

  return (
    <div className={classes["catalog-image"]}>
      <img src={props.url} alt="image" />
    </div>
  );
};
export default Image;
