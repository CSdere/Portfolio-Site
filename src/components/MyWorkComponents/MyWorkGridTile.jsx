import React from "react";

function Tile(props) {
  return (
    <div className="MyWorkTile">
      <img src={props.img} />
      <div className="MyWorkTileDesc">
        <a href={props.link} target="_blank">
          {props.title}
        </a>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Tile;
