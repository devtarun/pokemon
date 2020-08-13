import React, { useState } from "react";

import Header from "./components/shared/Header";
import Menu from "./components/shared/Menu";
import Pokemons from "./components/Pokemons";

function App() {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector(".invisible").classList.toggle("active");
  };

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} menuActive={menuState}/>
      <Menu toggleMenu={toggleMenu}/>
      <Pokemons />
    </div>
  );
}

export default App;
