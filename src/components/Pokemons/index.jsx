import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./index.scss";

import Card from "./Card";

const Pokemons = () => {
  const SERVER_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  let content = null;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(SERVER_URL);
  }, [SERVER_URL]);

  const fetchData = async (url) => {
    const { data } = await Axios.get(url);
    setData(data);
  };

  if (data) {
    content = data.results.map(({ name, url }, index) => (
      <Card key={index} name={name} url={url} />
    ));
  }

  

  return <div className="Pokemons">{content}</div>;
};

export default Pokemons;
