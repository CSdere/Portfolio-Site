import React from "react";

const logoImage = require("./Assets/PorfolioLogo.png");

function Logo() {
  return (
    <a href="#">
      <img src={logoImage} alt="Logo" />
    </a>
  );
}

export default Logo;
