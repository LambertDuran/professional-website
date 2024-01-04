import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../LanguageContext";
import "../../App.css";
import "../pages/Experiences.css";

import riga from "../../images/riga.webp";
import riga2 from "../../images/riga2.webp";
import mada from "../../images/madagascar.webp";
import lidar from "../../images/lidar.webp";
import pointCloud from "../../images/digit.gif";
import pcl from "../../images/pcl.webp";
import geoCouche from "../../images/geocouche.webp";
import geoCoupe from "../../images/geocoupe.webp";

import pfe_rapport from "../../pdf/Rapport_PFE.pdf";

import def_indicator from "../../images/top5_definition_indicateur.webp";
import data_fill from "../../images/top5_saisie_donnees.webp";
import indicateur_hebdo from "../../images/indicateur_hebdo.gif";

import parametrages from "../../images/parametrages.webp";
import bassins from "../../images/bassins.webp";
import creationAction from "../../images/creationAction.gif";
import affichageBassin from "../../images/affichageBassins.gif";
import ficheJournaliere from "../../images/ficheJournaliere.gif";

import translations from "../json/experiences.json";
import { useLocation } from "react-router-dom";

function ExperienceHeader(props) {
  return (
    <div className="columns">
      <div className="left">
        <h1>{props.date}</h1>
        <div></div>
      </div>
      <div className="right">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

function TimeLine() {
  return (
    <div className="left">
      <div className="arrow">
        <i className="fas fa-long-arrow-alt-down fa-6x"></i>
      </div>
      <div className="timeline"></div>
    </div>
  );
}

function Experiences() {
  const { language } = useContext(LanguageContext);

  // Utiliser pour scroller sur la section qui a été cliquée sur la page d'accueil
  const { state } = useLocation();
  const { targetId } = state || {};
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  }, [targetId]);

  return (
    <>
      <ExperienceHeader
        date={translations[language].date2}
        title={translations[language].title2}
      />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <p>
              {translations[language].bordeaux1}
              <strong>{translations[language].bordeaux101}</strong>
              {translations[language].bordeaux102}
              <strong>{translations[language].bordeaux2}</strong>
              {translations[language].bordeaux3}
              <strong>{translations[language].bordeaux4}</strong>
              {translations[language].bordeaux5}
              <strong>{translations[language].bordeaux6}</strong>
              {translations[language].bordeaux7}
              <a href={pfe_rapport} download="Recalage_Elastique.pdf">
                {translations[language].bordeaux8}
              </a>
              <div id="futurmap" style={{padding: '1em'}}/>
            </p>
          </section>
        </div>
      </div>
        <ExperienceHeader
          date={translations[language].date3}
          title={translations[language].title3}
        />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <img className="map" src={mada} alt="Localistation Mada"></img>
            <p>
              {translations[language].mad1} <strong>Futurmap</strong>{" "}
              {translations[language].mad2}
            </p>
            <p>{translations[language].mad3}</p>
            <div className="col_futurmap">
              <figure>
                <img
                  className="pic_futurmap"
                  src={lidar}
                  alt="Exemple de lidar"
                ></img>
                <figcaption className="caption">
                  {translations[language].capt1}
                </figcaption>
              </figure>
              <figure>
                <img
                  className="pic_futurmap"
                  src={pointCloud}
                  alt="Chargement dans le logiciel"
                ></img>
                <figcaption className="caption">
                  {translations[language].capt2}
                </figcaption>
              </figure>
            </div>
            <img className="pic_pcl" src={pcl} alt="Logo de pcl"></img>
            <p>
              {translations[language].mad4}
              <strong> {translations[language].mad5}</strong>{" "}
              {translations[language].mad6}
              <strong> {translations[language].mad601}</strong>
              {translations[language].mad602}
            </p>
            <p>
              {"\u2022 "} {translations[language].mad7} <strong>PCL</strong>{" "}
              {translations[language].mad8}
            </p>
            <p>
              {"\u2022 "} {translations[language].mad9}
              <strong> {translations[language].mad10} </strong>
              {translations[language].mad11}
            </p>
            <p>
              {"\u2022 "} {translations[language].mad12}
              <strong>{translations[language].mad13}</strong>
              {translations[language].mad14}
            </p>
            <p>
              {translations[language].mad15}
              <strong> {translations[language].mad16}</strong>{" "}
              {translations[language].mad17}
            <div id="sogelink" style={{padding: '1em'}}/>
            </p>
          </section>
        </div>
      </div>
        <ExperienceHeader
          date={translations[language].date4}
          title={translations[language].title4}
        />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <p>
              {translations[language].paris1} <strong>Covadis</strong>
              {translations[language].paris2}
              <strong>{translations[language].paris201}</strong>
              {translations[language].paris202}
              <strong>{translations[language].paris3}</strong>
              {translations[language].paris4}
            </p>
            <figure>
              <img
                className="pic_sogelink"
                src={geoCouche}
                alt="Orbite3D"
              ></img>
              <figcaption className="caption">
                {translations[language].capt3}
              </figcaption>
            </figure>
            <figure>
              <img className="pic_sogelink" src={geoCoupe} alt="Coupe"></img>
              <figcaption className="caption">
                {translations[language].capt4}
              </figcaption>
            </figure>
            <div id="dopm" style={{padding: '1em'}}/>
          </section>
        </div>
      </div>
        <ExperienceHeader
          date={translations[language].date5}
          title={translations[language].title5}
        />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <p>
              {translations[language].free2}
              <strong>{translations[language].free201}</strong>
              {translations[language].free202}
              {translations[language].free3}
            </p>
            <figure>
              <img
                src={def_indicator}
                alt="définition d'indicateur"
                className="dopm"
                caption="Définition d'un indicateur"
              ></img>
              <figcaption className="caption">
                {translations[language].capt5}
              </figcaption>
            </figure>
            <p>{translations[language].free4}</p>
            <figure>
              <img
                src={data_fill}
                alt="Saisie des données"
                className="dopm"
                caption="Saisie des données"
                ></img>
              <figcaption className="caption">
                {translations[language].capt6}
              </figcaption>
            </figure>
            <p>{translations[language].free5}</p>
            <figure>
              <img
                src={indicateur_hebdo}
                alt="Visualisation des données"
                className="dopm"
                caption="Visualisation des données"
              ></img>
              <figcaption className="caption">
                {translations[language].capt7}
              </figcaption>
            </figure>
            <div id="bioponi" style={{padding: '1em'}}/>
          </section>
        </div>
      </div>
        <ExperienceHeader
          date={translations[language].date6}
          title={translations[language].title6}
        />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <p>{translations[language].free6}</p>
            <figure>
              <img
                className="pic_sogelink"
                src={parametrages}
                alt="Paramétrage du projet"
              ></img>
              <figcaption className="caption">
                {translations[language].capt8}
              </figcaption>
            </figure>
            <figure>
              <img
                className="pic_sogelink"
                src={bassins}
                alt="Paramétrages des bassins"
              ></img>
              <figcaption className="caption">
                {translations[language].capt9}
              </figcaption>
            </figure>
            <p>{translations[language].free7}</p>
            <figure>
              <img
                className="pic_sogelink"
                src={creationAction}
                alt="Création d'une action"
              ></img>
              <figcaption className="caption">
                {translations[language].capt10}
              </figcaption>
            </figure>
            <p>{translations[language].free8}</p>
            <figure>
              <img
                className="pic_sogelink"
                src={affichageBassin}
                alt="Visualisation bassin"
              ></img>
              <figcaption className="caption">
                {translations[language].capt11}
              </figcaption>
            </figure>
            <p>{translations[language].free9}</p>
            <figure>
              <img
                className="pic_sogelink"
                src={ficheJournaliere}
                alt="Fiche Journaliere"
              ></img>
              <figcaption className="caption">
                {translations[language].capt12}
              </figcaption>
            </figure>
          </section>
        </div>
      </div>
      <div className="columns">
        <div className="left">
          <h1>{translations[language].date7}</h1>
        </div>
        <h1 className="rigth">{translations[language].title7}</h1>
      </div>
    </>
  );
}

export default Experiences;
