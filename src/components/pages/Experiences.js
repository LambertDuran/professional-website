import React, { useState, useEffect } from "react";
import "../../App.css";
import "../pages/Experiences.css";

import riga from "../../images/riga.webp";
import riga2 from "../../images/riga2.webp";
import mada from "../../images/madagascar.webp";
import lidar from "../../images/lidar.webp";
import pointCloud from "../../images/pointcloud.webp";
import pcl from "../../images/pcl.webp";
import geoCouche from "../../images/geocouche.webp";
import geoCoupe from "../../images/geocoupe.webp";

import pfe_rapport from "../../pdf/Rapport_PFE.pdf";

function displayDates() {
  const point = (
    <div className="timeline">
      <i className="fas fa-circle"></i>
    </div>
  );

  const arrow = (
    <div className="timeline">
      <i className="fas fa-long-arrow-alt-down fa-6x"></i>
    </div>
  );

  function displayPrimitves(point, nbPoints) {
    let points = [];
    for (let i = 0; i < nbPoints; i++) points.push(point);
    return <>{points} </>;
  }

  return (
    <>
      {point}
      {arrow}
      <p className="date">Septembre 2017</p>
      {displayPrimitves(point, 8)}
      <p className="date">Janvier 2018</p>
      {arrow}
      <p className="date">Février 2018</p>
      {displayPrimitves(point, 2)}
      <p className="date">Juillet 2018</p>
      {arrow}
      <p className="date">Octobre 2018</p>
      {displayPrimitves(point, 31)}
      <p className="date">Janvier 2021</p>
      {arrow}
      {displayPrimitves(point, 30)}
      <p className="date">Maintenant</p>
    </>
  );
}

function Experiences() {
  return (
    <div className="columns">
      <div className="left">{displayDates()}</div>
      <div className="right">
        <h1>Semestre Erasmus à Riga, Lettonie</h1>
        <section>
          <img className="map" src={riga} alt="Localistation Riga"></img>
          <p>
            Fin de l’année 2017, je commence la troisième année d’école
            d’ingénieurs, année décisive pour donner une direction précise à sa
            carrière professionnelle. À ce moment-là j’étais plutôt désabusé
            concernant mon avenir, car les deux années précédentes m’avaient
            déçu au niveau de l’enseignement. Les contenus surtout théoriques,
            dans la lignée des classes préparatoires, étaient cependant de
            qualité inférieure. Quant aux projets de modélisation ils étaient
            intellectuellement intéressants, mais toujours abstraits. Bref je ne
            savais pas ce que je voulais faire de ma vie et j’ai décidé de
            partir à l’étranger. En septembre 2017, je suis arrivé à Riga.
          </p>
        </section>
        <section>
          <img className="pic_riga" src={riga2} alt="Riga, Lettonie"></img>
          <p>
            Cela a été une immensee bouffée d'air frais, tant au niveau
            personnel que professionnel. Le volume horaire de cours était léger
            (15h / semaine) et cela m'a permis de me développer personnellement.
            J'ai appris à me débrouiller par mes propres moyens, dans une
            culture et une langue différentes. J'ai fait de magnifiques
            rencontres et j'ai pris goût au voyage et à l'aventure ! J'ai pu
            voyager en Lettonie, Lituanie et Estonie, en Suède et aussi en
            Islande. C'était une période de ma vie incroyable tant elle était
            rythmée par la découverte ! <br></br> Avec un de mes colocataires
            qui lui aussi était étudiant en informatique, nous passions beaucoup
            de temps à coder tous les deux, nous faisions des exercices de{" "}
            <strong>Python et C++</strong> sur CodingGame. J'ai pris beaucoup de
            plaisir à cette époque à apprendre à coder et j'ai commencé à
            chercher un stage en algorithmique. Finalement, j'ai trouvé un stage
            de développement
            <strong>ThermoFisher Scientific</strong>, entreprise de logiciels
            dans le secteur de l'imagerie médicale.
          </p>
        </section>
        <h1>"Développement d'un algorithme de recalage élastique d'images"</h1>
        <section>
          <p>
            Durant ces six mois, j'ai été confronté à de l'informatique
            pratique, et j'ai du me familiariser avec tous les outils de gestion
            de version, de déploiments, de tests qu'il est indispensable de
            maîtriser au sein d'une entreprise. Je ne travaillais plus sur un
            projet personnel, mais bien en équipe sur un logiciel avec des
            milliers d'utilisateurs! J'ai appris à utiliser Git et Microsoft
            Visual Studios qui sont des outils indispensables de développement.
            J'ai appris à développer des tests unitaires et des tests
            d'intégration pour stabiliser les briques fondamentales de
            l'algorithme que je développais. J'ai également manipulé des outils
            comme CMake , Trello et Jira . Enfin, j'ai mobilisé toutes mes
            capacités d'abstraction afin d'étudier la littérature existante et
            de l'adapter pour développer notre propre algorithme de recalage{" "}
            <a href={pfe_rapport} download="Recalage_Elastique.pdf">
              dont je parle plus en détail ici.
            </a>
          </p>
        </section>
        <section>
          <h1>
            Volontariat Internationnal en Entreprise (VIE) à Antananarivo,
            Madagascar
          </h1>
          <p>
            À la suite de ce stage, j'avais un besoin toujours plus grandissant
            de découvertes et j'étais définitivement mordu de développement.
            J'ai été accepté en VIE à Madagascar au sein de l'entreprise{" "}
            <strong>Futurmap</strong> pour faire des tests de développement sur
            un logiciel appelé GStarCAD et par la suite monter une équipe de
            développeurs. Cette période-là a été l'époque de beaucoup de
            premières fois: première longue expatriation, premier travail,
            premières responsabilités ...
          </p>
          <img className="map" src={mada} alt="Localistation Mada"></img>
          <p>
            Futurmap est une entreprise de traitements de données géographiques.
            Les collectivités ont entre autres l'obligation d'avoir une base de
            données géoréférencées à jour de leur territoire. Pour réaliser ces
            plans, des voitures surmontées de caméra LIDAR parcourent les zones
            urbaines et péri-urbaines. Concernant les zones rurales le
            traitement est généralement effectué avec du Lidar aérien. La caméra
            émet un laser qui est réfléchi par les objets autour du véhicule. Le
            rayon réfléchi est ensuite capté par la caméra, et les données sont
            stockées sous forme de nuage de points, ce qui représente
            d'importants volumes. C'est dans ce contexte que Futurmap se propose
            de sous-traiter la mise en dessin de ces données.
          </p>
          <div className="col_futurmap">
            <figure>
              <img
                className="pic_futurmap"
                src={lidar}
                alt="Exemple de lidar"
              ></img>
              <figcaption className="caption">
                Fonctionnement illustratif du Lidar.
              </figcaption>
            </figure>
            <figure>
              <img
                className="pic_futurmap"
                src={pointCloud}
                alt="Chargement dans le logiciel"
              ></img>
              <figcaption className="caption">
                Affichage d'un nuage de points dans GStarCad.
              </figcaption>
            </figure>
          </div>
          <img className="pic_pcl" src={pcl} alt="Logo de pcl"></img>
          <p>
            Le but de mon contrat était de développer des outils qui permettent
            de travailler avec des nuages de points dans{" "}
            <strong>GStarCAD, clone chinois d'AutoCAD</strong> dont la license
            coûte moins cher. Mais de paire avec le prix inférieur, les
            fonctionnalités du logiciel sont également inférieures, notamment
            concernant les nuages de points. Ma mission dans l'entreprise a été
            d'oeuvrer au développement de GStarCAD en vue de son adoption totale
            en production (on parle de plus de 250 dessinateurs). Cette mission
            de VIE s'est découpée en trois parties:
          </p>
          <p>
            {"\u2022 "} Compiler la librairie C++ Open Source de nuages de
            points <strong>PCL</strong> et essayer de charger des nuages de
            points dans le logiciel pour vérifier que l'affichage et le temps de
            réaction soient corrects. Suite à cette première validation, j'ai
            mis en place un algorithme de préparation de données afin de
            convertir des données clients au format .laz vers des données au
            format .pcd pour afficher les nuages dans GStarCAD. Ensuite j'ai
            développé un objet "PointCloud" permettant de charger des données
            dans GStarCAD puis de modifier la couleurs des points, d'effectuer
            des coupes dans le nuage, de faire des recherches spécifiques etc
            ...
          </p>
          <p>
            {"\u2022 "} Six mois plus tard, les tests d'intégration de l'objet
            nuage étant concluants, j'ai{" "}
            <strong>recruté trois développeurs et un alternant</strong>{" "}
            malgache. Le but de cette équipe était notamment d'accompagner la
            croissance et le développement de l'entreprise en mettant en place
            de nouvelles méthodes techniques de dessin et de contrôle qualité.
          </p>
          <p>
            {"\u2022 "} La seconde année de mon VIE j'avais à la fois une
            position de <strong>leader technique</strong> et d'
            <strong>encadrant / manager</strong> des projets, c'est-à-dire que
            je faisais le pont entre les demandes des chefs de départements en
            production et les développeurs. Je m'occupais notamment de la
            <strong> planification</strong> sur le long terme des projets (sur
            plusieurs mois). Je programmais des sprints de l'ordre de deux
            semaines et tous les matins j'organisais le déroulement d'une petite
            réunion d'une dizaine de minutes où l'équipe abordait les problèmes
            sur lesquels elle avait travaillé. Je mettais en place également{" "}
            <strong>les dépôts Git</strong> pour que la collaboration de
            l'équipe se déroule au mieux. Enfin j'avais mis en place également
            une documentation Développeur ET Utilisateur pour qu'il y ait une
            trace des fonctionnements de chaque commande.
          </p>
          <p>
            En paralèle de l'équipe de développeurs C++,{" "}
            <strong> j'encadrais un développeur Python</strong> qui avait
            développé avec TensorFlow un algorithme de reconnaissance d'images.
            Lorsque certaines équipes de production étaient en "sous-charge" de
            travail, en attendant que la charge soit rétablie l'équipe réalisait
            de l'annotation d'images. Cela consistait à tracer des "Bounding
            Box" sur des objets ponctuels tels que les bouches à clefs, les
            regards, les bornes à incendie etc... Cependant la précision exigée
            par les clients ne nous permettaient pas d'utiliser l'algorithme de
            deep learning pour du dessin pure mais plutôt pour effectuer un
            contrôle entre les objets détectés et ceux dessinés en prodution.
          </p>
        </section>
        <h1>Ingénieur logiciel dessin 3D, Sogélink</h1>
        <section>
          <p>
            J'ai intégré l'entreprise Géomédia en février 2021, en tant
            qu'ingénieur logiciel 3D, en remote à temps plein. La solution que
            propose Géomédia s'appelle <strong>Covadis</strong>, il s'agit d'un
            logiciel d'aide au dessin dans le domaine dans la construction. Plus
            largement, ce logiciel s'inscrit dans les solutions du groupe{" "}
            <strong>Sogelink</strong> qui a racheté l'entreprise courant 2021.
            Le gros de mon travail consiste à développer un module géotechnique
            dans le logiciel afin de modéliser des couches géologiques sur des
            modèles numériques de terrain (MNT). Concrètement, une fois la
            modélisation du terrain réalisée, les ingénieurs géotechniciens
            saisissent dans leur dessin des points de sondage qu'ils ont relevé
            sur le terrain en renseignant la nature des couches géologiques qui
            ont été rencontrées. Mon module calcule ensuite les couches (
            <strong>calcul parallélisé</strong>, utilisation de std::thread) et
            permet de les visualiser en 2D (vue en coupe) et 3D (vue en orbite)
            la modélisation des couches géologiques. J'ai ensuite adapté les
            autres modules "métier du logiciel" pour qu'ils prennent en compte
            cette notion géologique dans leurs calculs.
          </p>
          <figure>
            <img className="pic_sogelink" src={geoCouche} alt="Orbite3D"></img>
            <figcaption className="caption">
              Orbite 3D d'un MNT avec modéolisation de couches géologiques
            </figcaption>
          </figure>
          <figure>
            <img className="pic_sogelink" src={geoCoupe} alt="Coupe"></img>
            <figcaption className="caption">
              Visualisation en vue de coupe des couches géologiques
            </figcaption>
          </figure>
        </section>
      </div>
    </div>
  );
}

export default Experiences;
