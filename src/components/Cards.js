import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import translations from "./json/cards.json";

import couches_geo from "../images/couches_geo.gif";
import cloud from "../images/cloud.webp";
import visu_data from "../images/visualisation_des_donnees.webp"
import data_input from "../images/data_input.PNG"
import data_grid from "../images/visualisation_grille.PNG"

function Cards() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="cards">
      <h1>{translations[language].title}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={visu_data}
              text={translations[language].card3}
              label="Typescript / React / Node"
              path="/experiences"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={data_grid}
              text={translations[language].card4}
              label="Typescript / React / Node"
              path="/experiences"
            />
            <CardItem
              src={data_input}
              text={translations[language].card5}
              label="Typescript / React / Node"
              path="/experiences"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={couches_geo}
              text={translations[language].card1}
              label="C++ / 3D / Multi-threading / Modélisation"
              path="/experiences"
            />
            <CardItem
              src={cloud}
              text={translations[language].card2}
              label="C++ / 3D / PCL / Traitement de données"
              path="/experiences"
            />
          </ul>
          <ul className="cards__items">
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
