import React from "react";
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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const mada_img = [moto1, moto2, moto3, moto4, moto5, moto6];

export default function Hobbies() {
  return (
    <>
      <div className="hobbies-title-container">
        <h1 className="hobbies-title"> Lectures </h1>
      </div>
      <div className="moto_container">
        <ul>
          <li className="moto_li">
            Très intéressé par l'actualité économique, sociale et géopolitique,
            je suis abonné au monde diplomatique.
          </li>
          <li className="moto_li">
            Passionné de romans d'aventure, mes auteurs favorits ont vécu le
            siècle dernier. J'ai toujours à mes côtés au moins un livre de
            Joseph Kessel, Nicolas Bouvier ou Henry de Montfreid.
          </li>
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
        </a>
        Emission sociologique de France Culture où les locuteurs détaillent un
        fait marquant de leur vie. "Mon histoire d'amour durant le confinement",
        ou bien "Le jour où j'ai assisté à un viol" en passant par "Comment j'ai
        découvert un trésor", tous les sujets sont abordés, et sans tabout !
      </div>
      <div className="hobbies-text">
        {"\u2022 "}
        <a
          href="http://rendezvousavecmrx.free.fr/page/liste.php"
          target="_blank"
          rel="noreferrer"
        >
          Rendez-vous avec X :
        </a>
        Entretien par Patrick Pesnot de 'Monsieur X', ancien agent de la DGSE.
        Monsieur X revient sur des histoires d'espionnage et des affaires
        secrètes dans lesquelles se jouent l'histoire de nos démocraties !
      </div>
      <div className="hobbies-text">
        {"\u2022 "}
        <a
          href="https://www.youtube.com/c/thinkerview"
          target="_blank"
          rel="noreferrer"
        >
          Thinkerview :
        </a>
        Chaîne YouTube recevant des journalistes, des diplomates, des lanceurs
        d'aleter etc .. Ils sont invités à s'exprimer sur des sujets
        d'actualité. Dans une société où le temps est compté, ce format
        d'entretien procure une grande bouffée d'air frais, les intervenants
        pouvant prendre la parole jusqu'à 4h sur le sujet qu'ils souhaitent !
      </div>
      <div className="hobbies-text">
        {"\u2022 "}
        <a
          href="https://open.spotify.com/show/6NsIUcTCFBIPT7TxP87zdF"
          target="_blank"
          rel="noreferrer"
        >
          Les Baladeurs :
        </a>
        Une série 'Les others', des histoires et des aventures en pleine nature.
      </div>
      <div className="hobbies-title-container">
        <h1 className="hobbies-title"> Moto </h1>
      </div>
      <div className="moto_container">
        <ul>
          <li className="moto_li">
            J'ai acheté ma première moto à Madagascar, un peu par hasard.
            Antananarivo étant une ville atrocement embouteillée, il était
            nécessaire d'avoir un deux roues pour se déplacer. Donc c'est plutôt
            par besoin que par passion que j'ai commencé à rouler.
          </li>
          <li className="moto_li">
            La suite est classique, je partais en week-end en moto avec des
            copains motards et la passion a été vite suscitée. Finalement en
            2020, à la fin de mon contrat à Madagascar, je partais voyager tout
            seul avec ma bécane, pour faire le tour de l'île pendant les deux
            prochains mois.
          </li>
        </ul>
        <div className="carousel_container">
          <Carousel
            infiniteLoop={true}
            dynamicHeight={true}
            autoPlay={true}
            swipeable={true}
            showArrows={false}
            interval={5000}
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
    </>
  );
}
