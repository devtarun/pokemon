import React from "react";
import "./index.scss";

import IconMenu from "../../../assets/menu.svg";
import IconBack from "../../../assets/back.svg";

const Header = ({ toggleMenu, menuActive }) => {
  return (
    <header>
      {menuActive ? (
        <img
          className="menu_btn"
          onClick={toggleMenu}
          src={IconBack}
          alt="Icon back"
        />
      ) : (
        <img
          className="menu_btn"
          onClick={toggleMenu}
          src={IconMenu}
          alt="Icon menu"
        />
      )}

      <h3>POKEMONS</h3>
    </header>
  );
};

export default Header;
