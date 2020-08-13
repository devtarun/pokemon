import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import Axios from "axios";

// Import Icons
import iconHeight from "../../../assets/height.svg";
import iconWeight from "../../../assets/scale.svg";
import iconExp from "../../../assets/observation.svg";
import iconMoves from "../../../assets/swords.svg";

import { matColor } from "../../Utils";

const Card = ({ name, url }) => {
  const [data, setData] = useState(null);
  const [scrollPos, setScrollPos] = useState(null);
  let content = null;
  const pokemonDiv = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(url);
      setData(data);
    };
    fetchData();
  }, [url]);

  if (data) {
    content = (
      <div
        ref={pokemonDiv}
        className="Pokemon"
        onClick={(e) => openCards(data.id)}
      >
        <img src={data.sprites.other.dream_world.front_default} alt={name} />
        <p>
          <strong>{name.toUpperCase()}</strong>
        </p>
        <div className="info">
          {/* Height: {data.height} <br/>
          Weight: {data.weight} <br/>
          Base Experience: {data.base_experience} <br/>
          Moves: <ul></ul> */}

          <div className="info_base">
            <h4>
              <img
                style={{ width: "30px", height: "30px" }}
                src={iconHeight}
                alt="Icon height"
              />
              <span>{data.height}</span>
            </h4>
            <h4>
              <img
                style={{ width: "30px", height: "30px" }}
                src={iconWeight}
                alt="Icon Weight"
              />
              <span>{data.weight}</span>
            </h4>
            <h4>
              <img
                style={{ width: "30px", height: "30px" }}
                src={iconExp}
                alt="Icon Weight"
              />
              <span>{data.base_experience}</span>
            </h4>
          </div>
          <div className="info_moves">
            <h4>
              <img
                style={{ width: "35px", height: "35px" }}
                src={iconMoves}
                alt="Icon Moved"
              />
              <span>Moves</span>
            </h4>
            {data.moves.map(({ move }, index) => {
              const color = matColor[Math.floor(Math.random() * matColor.length)];
              return (
                <span
                  style={{
                    backgroundColor: color,
                    boxShadow: "0 0 8px 0px" + color,
                  }}
                  className="pill"
                  key={index}
                >
                  {move.name.toUpperCase()}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const openCards = (id) => {
    const pokemonContainer = document.querySelector(".Pokemons");

    const pokemons = document.querySelectorAll(".Pokemon");

    if (pokemonDiv.current.classList.length === 1) {
      pokemonDiv.current.classList.add("active");

      setScrollPos(pokemonContainer.scrollTop);

      pokemons.forEach((item) => {
        if (item !== pokemonDiv.current) {
          item.classList.add("dn");
        }
      });
    } else {
      pokemonDiv.current.classList.remove("active");

      pokemonContainer.scrollTop = scrollPos;

      pokemons.forEach((item) => {
        item.classList.remove("dn");
      });
    }
  };

  return <>{content}</>;
};

export default Card;
