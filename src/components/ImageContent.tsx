import React from "react";
import classes from "./ImageContent.module.scss";
import { data } from "../components/data.js";

type Props = {
  currentImage: number;
};
const ImageContent: React.FC<Props> = (props) => {
  return (
    <div className={classes["content"]}>
      <h1 className={classes["content__heading"]}>
        <span>{props.currentImage}.</span>
        <span>{data[props.currentImage - 1].title}</span>
      </h1>
      <div className={classes["content__text"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dicta
          distinctio voluptatum, mollitia fugiat illum nobis quod repudiandae
          veritatis deleniti quae. Corrupti delectus dolores reprehenderit ipsum
          molestiae iusto libero esse!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dicta
          distinctio voluptatum, mollitia fugiat illum nobis quod repudiandae
          veritatis deleniti quae. Corrupti delectus dolores reprehenderit ipsum
          molestiae iusto libero esse!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dicta
          distinctio voluptatum, mollitia fugiat illum nobis quod repudiandae
          veritatis deleniti quae. Corrupti delectus dolores reprehenderit ipsum
          molestiae iusto libero esse!
        </p>
      </div>
    </div>
  );
};

export default ImageContent;
