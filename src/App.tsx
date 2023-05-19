// import { data } from "../src/components/data.js";
import { useState, useEffect } from "react";
import ControlButtons from "./components/ControlButtons";
import { data } from "./components/data.js";

import Catalog from "./components/Catalog";
import ImageContent from "./components/ImageContent.js";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);

  const controlHandler = function () {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    let slider: number;
    if (isPlaying) {
      slider = setInterval(() => {
        if (currentImage >= data.length) {
          setCurrentImage(1);
        } else {
          setCurrentImage((prev) => (prev += 1));
        }
      }, 3000);
    }
    return () => clearInterval(slider);
  }, [isPlaying, currentImage]);

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

  return (
    <div className="app">
      <Catalog
        onSlide={sliderHandler}
        onSetImage={setCurrentImage}
        currentImage={currentImage}
      />
      <div className="content">
        <ImageContent currentImage={currentImage} />
        <ControlButtons isPlaying={isPlaying} onPlay={controlHandler} />
      </div>
    </div>
  );
}

export default App;
