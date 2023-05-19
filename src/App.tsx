// import { data } from "../src/components/data.js";
import { useState } from "react";
import ControlButtons from "./components/ControlButtons";

import Catalog from "./components/Catalog";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const controlHandler = function () {
    setIsPlaying((prev) => !prev);
  };
  return (
    <div className="app">
      <Catalog isPlaying={isPlaying} />
      <div className="content">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          repellat voluptatum impedit quia optio? Optio doloribus veritatis
          recusandae tenetur? Esse nesciunt expedita sint non asperiores. Harum
          illo fugiat laborum voluptates.
        </div>
        <ControlButtons isPlaying={isPlaying} onPlay={controlHandler} />
      </div>
    </div>
  );
}

export default App;
