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
}

type Props = {
  isPlaying: boolean;
};

const Catalog: React.FC<Props> = (props) => {
  const [currentImage, setCurrentImage] = useState(1);

  let displayImage = data[+currentImage - 1].image;

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

  useEffect(() => {
    let slider: number;
    if (props.isPlaying) {
      slider = setInterval(() => {
        if (currentImage >= data.length) {
          setCurrentImage(1);
        } else {
          setCurrentImage((prev) => (prev += 1));
        }
      }, 3000);
    }
    return () => clearInterval(slider);
  }, [props.isPlaying, currentImage]);

  const sliderHandler = function (direction: string) {
    const total = data.length;

    if (direction == "left") {
      currentImage > 1
        ? setCurrentImage((prev) => (prev -= 1))
        : setCurrentImage(total);
    } else {
      currentImage >= total
        ? setCurrentImage(1)
        : setCurrentImage((prev) => (prev += 1));
    }
  };

  const refHandler = function (node: RefObject<HTMLDivElement>, id: number) {
    const map = getMap();
    if (node) {
      map.set(id, node);
    } else {
      map.delete(id);
    }
  };

  useEffect(() => {
    scrollToId(currentImage);
  }, [currentImage]);

  const selectImageHandler = function (num: number) {
    setCurrentImage(num);
  };

  return (
    <div className={classes.catalog}>
      <div className={classes["catalog-container"]}>
        <Image url={displayImage} />
      </div>
      <div className={classes["catalog-tumbnail"]}>
        <div className={classes["tumbnail-container"]}>
          <div className={classes["tumbnail"]}>
            {data.map((image: ImageType) => (
              <div
                className={`${classes["image"]} ${
                  classes[image.id === currentImage ? "image--active" : ""]
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
          onLeftClick={sliderHandler.bind(null, "left")}
          onRightClick={sliderHandler.bind(null, "right")}
        />
      </div>
    </div>
  );
};

export default Catalog;
