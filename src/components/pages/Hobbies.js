import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import translations from "../json/hobbies.json";
import "../../App.css";
import "./Hobbies.css";
import lusageDuMonde from "../../images/lusageDuMonde.webp";
import lesSecretsDeLaMerRouge from "../../images/lesSecretsDeLaMerRouge.webp";
import lesCavaliers from "../../images/lesCavaliers.webp";
import moto1 from "../../images/moto1.webp";
import moto2 from "../../images/moto2.webp";
import moto3 from "../../images/moto3.webp";
import moto4 from "../../images/moto4.webp";
import moto5 from "../../images/moto5.webp";
import moto6 from "../../images/moto6.webp";
import rando1 from "../../images/rando1.webp";
import rando2 from "../../images/rando2.webp";
import rando3 from "../../images/rando3.webp";
import rando4 from "../../images/rando4.webp";
import rando5 from "../../images/rando5.webp";
import AudioPlayer from "../AudioPlayer";
import ambiantTechno from "../../sounds/ambiantTechno.mp3";
import industrialTechno from "../../sounds/industrial_Techno.mp3";
import mountainSkyline from "../../images/mountainSkyline.jpg";
import moon from "../../images/moon.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const mada_img = [moto1, moto2, moto3, moto4, moto5, moto6];
const rando_img = [rando1, rando2, rando3, rando4, rando5];

export default function Hobbies() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className="hobbies-title-container">
        <h1 className="hobbies-title"> {translations[language].title1} </h1>
      </div>
      <div className="moto_container">
        <ul>
          <li className="moto_li">{translations[language].lect1}</li>
          <li className="moto_li">{translations[language].lect2}</li>
        </ul>
        <div className="hobbies-img-container">
          <img
            className="hobbies-img"
            src={lusageDuMonde}
            alt="L'Usage du Monde, Nicolas Bouvier"
          ></img>
          <img
            className="hobbies-img"
            src={lesSecretsDeLaMerRouge}
            alt="Les Secrets de la Mer Rouge, Henry de Montfreid"
          ></img>
          <img
            className="hobbies-img"
            src={lesCavaliers}
            alt="Les cavaliers, Joseph Kessel"
          ></img>
        </div>
      </div>
      <div className="hobbies-title-container">
        <h1 className="hobbies-title"> Podcasts</h1>
      </div>
      <div className="hobbies-text">
        {"\u2022 "}
        <a
          href="https://www.franceculture.fr/emissions/les-pieds-sur-terre"
          rel="noreferrer"
          target="_blank"
        >
          Les pieds sur Terre :
        </a>{" "}
        {translations[language].pd1}
      </div>
      <div className="hobbies-text">
        {"\u2022 "}
        <a
          href="http://rendezvousavecmrx.free.fr/page/liste.php"
          target="_blank"
          rel="noreferrer"
        >
          Rendez-vous avec X :
        </a>{" "}
        {translations[language].pd2}
      </div>
      <div className="hobbies-text">
        {"\u2022 "}
        <a
          href="https://www.youtube.com/c/thinkerview"
          target="_blank"
          rel="noreferrer"
        >
          Thinkerview :
        </a>{" "}
        {translations[language].pd3}
      </div>
      <div className="hobbies-text">
        {"\u2022 "}
        <a
          href="https://open.spotify.com/show/6NsIUcTCFBIPT7TxP87zdF"
          target="_blank"
          rel="noreferrer"
        >
          Les Baladeurs :
        </a>{" "}
        {translations[language].pd4}
      </div>
      <div className="hobbies-title-container">
        <h1 className="hobbies-title"> Moto </h1>
      </div>
      <div className="moto_container">
        <ul>
          <li className="moto_li">{translations[language].moto1}</li>
          <li className="moto_li">{translations[language].moto2}</li>
        </ul>
        <div className="carousel_container">
          <Carousel
            infiniteLoop={true}
            dynamicHeight={true}
            swipeable={true}
            showArrows={false}
          >
            {mada_img.map((img) => {
              return (
                <img
                  src={img}
                  alt="Moto à Madagascar"
                  className="moto_img"
                ></img>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="hobbies-title-container">
        <h1 className="hobbies-title"> {translations[language].title3} </h1>
      </div>
      <div className="rando_container">
        <div className="carousel_container">
          <Carousel
            infiniteLoop={true}
            dynamicHeight={true}
            swipeable={true}
            showArrows={false}
          >
            {rando_img.map((img) => {
              return (
                <img
                  src={img}
                  alt="Moto à Madagascar"
                  className="moto_img"
                ></img>
              );
            })}
          </Carousel>
        </div>
        <div className="rando_text">{translations[language].rando}</div>
      </div>
      <div className="hobbies-title-container">
        <h1 className="hobbies-title"> Musique </h1>
      </div>
      <div className="music_text">{translations[language].musique}</div>
      <div className="music_container">
        <AudioPlayer
          src={ambiantTechno}
          title="#Ambiant Techno"
          img={mountainSkyline}
        />
        <AudioPlayer
          src={industrialTechno}
          title="#Industrial Techno"
          img={moon}
        />
      </div>
    </>
  );
}
