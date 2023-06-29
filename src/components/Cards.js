import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import translations from "./json/cards.json";

import couches_geo from "../images/couches_geo.gif";
import cloud from "../images/cloud.webp";
import recalage from "../images/cerveau.webp";
import importShape from "../images/importShape.webp";

function Cards() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="cards">
      <h1>{translations[language].title}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={couches_geo}
              text={translations[language].card1}
              label="C++ / 3D / Modélisation"
              path="/experiences"
            />
            <CardItem
              src={importShape}
              text={translations[language].card2}
              label="C++ / C / .shp / QGis / AutoCAD"
              path="/experiences"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={recalage}
              text={translations[language].card3}
              label="C++ / Multi-threading / Recalage d'images / Méthode de gradients"
              path="/experiences"
            />
            <CardItem
              src={cloud}
              text={translations[language].card4}
              label="C++ / 3D / PCL / Traitement de données"
              path="/experiences"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
