import React, { useState, useEffect, RefObject } from "react";
import { MutableRefObject } from "react";
import { data } from "../components/data.js";
import classes from "./Catalog.module.scss";
import Image from "./Image.js";
import ButtonDirections from "./ButtonDirections.js";
// import ThubnailImage from "./ThubnailImage.js";

interface ImageType {
  image: string;
  id: number;
  title: string;
}

type Props = {
  onSlide: (direction: string) => void;
  onSetImage: (num: number) => void;
  currentImage: number;
};

const Catalog: React.FC<Props> = (props) => {
  let displayImage = data[+props.currentImage - 1].image;

  const itemsRef: MutableRefObject<HTMLElement | null> = React.useRef(null);

  const getMap = function () {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  function scrollToId(itemId: number) {
    const map = getMap();
    const node = map.get(itemId);

    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
    }
  }

  const refHandler = function (node: RefObject<HTMLDivElement>, id: number) {
    const map = getMap();
    if (node) {
      map.set(id, node);
    } else {
      map.delete(id);
    }
  };

  useEffect(() => {
    scrollToId(props.currentImage);
  }, [props.currentImage]);

  const selectImageHandler = function (num: number) {
    props.onSetImage(num);
  };

  return (
    <div className={classes.catalog}>
      <div className={classes["catalog-container"]}>
        <Image
          url={displayImage}
          id={props.currentImage}
          title={data[props.currentImage].title}
        />
      </div>
      <div className={classes["catalog-tumbnail"]}>
        <div className={classes["tumbnail-container"]}>
          <div className={classes["tumbnail"]}>
            {data.map((image: ImageType) => (
              <div
                className={`${classes["image"]} ${
                  classes[
                    image.id === props.currentImage ? "image--active" : ""
                  ]
                }`}
                key={image.id}
                ref={(node) => refHandler(node, image.id)}
                onClick={() => selectImageHandler(image.id)}
              >
                <img src={image.image} alt="image view" />
              </div>
            ))}
          </div>
        </div>
        <ButtonDirections
          onLeftClick={props.onSlide.bind(null, "left")}
          onRightClick={props.onSlide.bind(null, "right")}
        />
      </div>
    </div>
  );
};

export default Catalog;
