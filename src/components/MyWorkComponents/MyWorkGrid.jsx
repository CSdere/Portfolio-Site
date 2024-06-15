import React from "react";
import Tile from "./MyWorkGridTile";

const rpgImg = require("./Assets/RPG.png");

function MyWorkGrid(props) {
  return (
    <div className="MyWorkGrid">
      <Tile
        img={rpgImg}
        title="Random Password Generator"
        link="https://csdere.github.io/Random-Password-Genrator/"
        description="A random password generator that produces a safe 15 character password."
      />
    </div>
  );
}

export default MyWorkGrid;
