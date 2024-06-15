import React from "react";
import Logo from "./HeaderComponents/Logo";
import HeaderButtons from "./HeaderComponents/HeaderButtons";

function Header() {
  return (
    <header>
      <div className="HeaderItems">
        <Logo />
        <HeaderButtons />
      </div>
    </header>
  );
}

export default Header;
