import React from "react";

import "./index.scss";
import market from "../../../assets/market.svg";
import pokemon from "../../../assets/pokeball.svg";

const Menu = ({toggleMenu}) => {

  return (
    <>
      <aside className="menu">
        <div className="menu_header">
          <div className="menu_header__info">
            <img src="http://picsum.photos/100" alt="Profile" />
            <span>
              <strong>Tarun Dwivedi</strong>
            </span>
          </div>
        </div>
        <div className="menu_body">
          <ul>
            <li onClick={toggleMenu}>
              <img src={pokemon} alt="My Collection" /> My Collection
            </li>
            <li onClick={toggleMenu}>
              <img src={market} alt="Market" /> Market
            </li>
          </ul>
        </div>
      </aside>
      <div className="invisible" onClick={toggleMenu}></div>
    </>
  );
};

export default Menu;
