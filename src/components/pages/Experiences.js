import React, { useState, useEffect } from 'react'
import '../../App.css'
import '../pages/Experiences.css'

import riga from '../../images/riga.webp'
import riga2 from '../../images/riga2.webp'
import mada from '../../images/madagascar.webp'
import lidar from '../../images/lidar.webp'
import pointCloud from '../../images/pointcloud.webp'
import pcl from '../../images/pcl.webp'

import pfe_rapport from '../../pdf/Rapport_PFE.pdf'

function displayDates() {
    var point = (
        <div className="exp-circles">
            <i class="fas fa-circle"></i>
        </div>
    )

    var arrow = (
        <div className="exp-arrows">
            <i class="fas fa-long-arrow-alt-down fa-6x"></i>
        </div>
    )

    return (
        <>
            {point}
            {arrow}
            <div className="exp-dates">Septembre 2017</div>
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            <div className="exp-dates">Janvier 2018</div>
            {arrow}
            <div className="exp-dates">Février 2018</div>
            {point}
            {point}
            <div className="exp-dates">Juillet 2018</div>
            {arrow}
            <div className="exp-dates">Octobre 2018</div>
            {}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            {point}
            <div className="exp-dates">Novembre 2020</div>
            {arrow}
        </>
    )
}

function displayPointCloud(dates) {
    return dates ? (
        <div className="exp-subStories">
            <figure className="exp-img-lidar">
                <img
                    className="exp-img-lidar"
                    src={lidar}
                    alt="Exemple de lidar"
                ></img>
                <figcaption className="exp-caption">
                    Fonctionnement illustratif du Lidar.
                </figcaption>
            </figure>
            <figure className="exp-img-logiciel">
                <img
                    className="exp-img-logiciel"
                    src={pointCloud}
                    alt="Chargement dans le logiciel"
                    caption="Test"
                ></img>
                <figcaption className="exp-caption">
                    Affichage d'un nuage de points dans GStarCad.
                </figcaption>
            </figure>
        </div>
    ) : (
        <>
            <div className="exp-subStories">
                <figure className="exp-img-figure">
                    <img
                        className="exp-img-lidar"
                        src={lidar}
                        alt="Exemple de lidar"
                    ></img>
                    <figcaption className="exp-caption">
                        Fonctionnement illustratif du Lidar.
                    </figcaption>
                </figure>
            </div>
            <div className="exp-subStories">
                <figure className="exp-img-figure">
                    <img
                        className="exp-img-logiciel"
                        src={pointCloud}
                        alt="Chargement dans le logiciel"
                        caption="Test"
                    ></img>
                    <figcaption className="exp-caption">
                        Affichage d'un nuage de points dans GStarCad.
                    </figcaption>
                </figure>
            </div>
        </>
    )
}

function Experiences() {
    const [dates, setDates] = useState(true)

    const showDates = () => {
        if (window.innerWidth < 1200) setDates(false)
        else setDates(true)
    }

    useEffect(() => {
        showDates()
    }, [])

    window.addEventListener('resize', showDates)

    return (
        <div className="exp-main">
            {dates && (
                <div className="exp-dates-container">{displayDates()}</div>
            )}
            <div className="exp-storiesWrapper">
                <div className="exp-titleStories">
                    Semestre Erasmus à Riga, Lettonie
                </div>
                <div className="exp-stories">
                    <div className="exp-subStories">
                        <div className="exp-text">
                            Fin de l’année 2017, je commence la troisième année
                            d’école d’ingénieurs, année décisive pour donner une
                            direction précise à sa carrière professionnelle. À
                            ce moment-là j’étais plutôt désabusé concernant mon
                            avenir, car les deux années précédentes m’avaient
                            déçu au niveau de l’enseignement. Les contenus
                            surtout théoriques, dans la lignée des classes
                            préparatoires, étaient cependant de qualité
                            inférieure. Quant aux projets de modélisation ils
                            étaient intellectuellement intéressants, mais
                            toujours abstraits. Bref je ne savais pas ce que je
                            voulais faire de ma vie et j’ai décidé de partir à
                            l’étranger. En septembre 2017, je suis arrivé à
                            Riga.
                        </div>
                        <img
                            className={
                                dates ? 'exp-map' : 'img-mobile-screen-map'
                            }
                            src={riga}
                            alt="Localistation Riga"
                        ></img>
                    </div>
                    <div className="exp-subStories">
                        {dates && (
                            <img
                                className={
                                    dates ? 'exp-img' : 'img-mobile-screen-img'
                                }
                                src={riga2}
                                alt="Riga, Lettonie"
                            ></img>
                        )}
                        <div className="exp-text">
                            Cela a été une immensee bouffée d'air frais, tant au
                            niveau personnel que professionnel. Le volume
                            horaire de cours était léger (15h / semaine) et cela
                            m'a permis de me développer personnellement. J'ai
                            appris à me débrouiller par mes propres moyens, dans
                            une culture et une langue différentes. J'ai fait de
                            magnifiques rencontres et j'ai pris goût au voyage
                            et à l'aventure ! J'ai pu voyager en Lettonie,
                            Lituanie et Estonie, en Suède et aussi en Islande.
                            C'était une période de ma vie incroyable tant elle
                            était rythmée par la découverte !<br></br>
                            Avec un de mes colocataires qui lui aussi était
                            étudiant en informatique, nous passions beaucoup de
                            temps à coder tous les deux, nous faisions des
                            exercices de <strong> Python et C++ </strong> sur
                            CodingGame. J'ai pris beaucoup de plaisir à cette
                            époque à apprendre à coder et j'ai commencé à
                            chercher un stage en algorithmique. Finalement, j'ai
                            trouvé un stage de développement
                            <strong> ThermoFisher Scientific</strong>,
                            entreprise de logiciels dans le secteur de
                            l'imagerie médicale.
                        </div>
                        {!dates && (
                            <img
                                className={
                                    dates ? 'exp-img' : 'img-mobile-screen-img'
                                }
                                src={riga2}
                                alt="Riga, Lettonie"
                            ></img>
                        )}
                    </div>
                </div>
                <div className="exp-titleStories2">
                    "Développement d'un algorithme de recalage élastique
                    d'images"
                </div>
                <div className="exp-stories">
                    <div className="exp-subStories">
                        <p className="exp-text">
                            Durant ces six mois, j'ai été confronté à de
                            l'informatique pratique, et j'ai du me familiariser
                            avec tous les outils de gestion de version, de
                            déploiments, de tests qu'il est indispensable de
                            maîtriser au sein d'une entreprise. Je ne
                            travaillais plus sur un projet personnel, mais bien
                            en équipe sur un logiciel avec des milliers
                            d'utilisateurs! J'ai appris à utiliser
                            <strong> Git </strong>
                            et <strong> Microsoft Visual Studios </strong> qui
                            sont des outils indispensables de développement.
                            J'ai appris à développer des tests unitaires et des
                            tests d'intégration pour stabiliser les briques
                            fondamentales de l'algorithme que je développais.
                            J'ai également manipulé des outils comme{' '}
                            <strong> CMake </strong> ,<strong> Trello </strong>{' '}
                            et <strong> Jira </strong>. Enfin, j'ai mobilisé
                            toutes mes capacités d'abstraction afin d'étudier la
                            littérature existante et de l'adapter pour
                            développer notre propre algorithme de recalage
                            <a
                                className="exp-href"
                                href={pfe_rapport}
                                download="Recalage_Elastique.pdf"
                            >
                                {' '}
                                dont je parle plus en détail ici.
                            </a>
                        </p>
                    </div>
                </div>
                <div className="exp-titleStories2">
                    Volontariat Internationnal en Entreprise (VIE) à
                    Antananarivo, Madagascar
                </div>
                <div className="exp-stories">
                    <div className="exp-subStories">
                        <p className="exp-text">
                            À la suite de ce stage, j'avais un besoin toujours
                            plus grandissant de découvertes et j'étais
                            définitivement mordu de développement. J'ai été
                            accepté en VIE à Madagascar au sein de l'entreprise
                            <strong> Futurmap</strong> pour faire des tests de
                            développement sur un logiciel appelé GStarCAD et par
                            la suite monter une équipe de développeurs. Cette
                            période-là a été l'époque de beaucoup de premières
                            fois: première longue expatriation, premier travail,
                            premières responsabilités ...
                        </p>
                        <img
                            className={
                                dates ? 'exp-map' : 'img-mobile-screen-map'
                            }
                            src={mada}
                            alt="Localistation Mada"
                        ></img>
                    </div>
                    <div className="exp-subStories">
                        <p className="exp-text">
                            Futurmap est une entreprise de traitements de
                            données géographiques. Les collectivités ont entre
                            autres l'obligation d'avoir une base de données
                            géoréférencées à jour de leur territoire. Pour
                            réaliser ces plans, des voitures surmontées de
                            caméra LIDAR parcourent les zones urbaines et
                            péri-urbaines. Concernant les zones rurales le
                            traitement est généralement effectué avec du Lidar
                            aérien. La caméra émet un laser qui est réfléchi par
                            les objets autour du véhicule. Le rayon réfléchi est
                            ensuite capté par la caméra, et les données sont
                            stockées sous forme de nuage de points, ce qui
                            représente d'importants volumes. C'est dans ce
                            contexte que Futurmap se propose de sous-traiter la
                            mise en dessin de ces données.
                        </p>
                    </div>
                    {displayPointCloud(dates)}
                    <div className="exp-subStories">
                        <p class="exp-text">
                            Le but de mon contrat était de développer des outils
                            qui permettent de travailler avec des nuages de
                            points dans
                            <strong>
                                {' '}
                                GStarCAD, clone chinois d'AutoCAD{' '}
                            </strong>{' '}
                            dont la license coûte moins cher. Mais de paire avec
                            le prix inférieur, les fonctionnalités du logiciel
                            sont également inférieures, notamment concernant les
                            nuages de points. Ma mission dans l'entreprise a été
                            d'oeuvrer au développement de GStarCAD en vue de son
                            adoption totale en production (on parle de plus de
                            250 dessinateurs). Cette mission de VIE s'est
                            découpée en trois parties:
                        </p>
                        <img
                            style={{
                                flex: 0,
                                flexWrap: 'wrap',
                                width: '100px',
                                height: '100px',
                            }}
                            src={pcl}
                            alt="Logo de pcl"
                        ></img>
                    </div>
                    <p className="exp-text">
                        {'\u2022 '} Compiler la librairie C++ Open Source de
                        nuages de points <strong>PCL</strong> et essayer de
                        charger des nuages de points dans le logiciel pour
                        vérifier que l'affichage et le temps de réaction soient
                        corrects. Suite à cette première validation, j'ai mis en
                        place un algorithme de préparation de données afin de
                        convertir des données clients au format .laz vers des
                        données au format .pcd pour afficher les nuages dans
                        GStarCAD. Ensuite j'ai développé un objet "PointCloud"
                        permettant de charger des données dans GStarCAD puis de
                        modifier la couleurs des points, d'effectuer des coupes
                        dans le nuage, de faire des recherches spécifiques etc
                        ...
                    </p>
                    <p className="exp-text">
                        {'\u2022 '} Six mois plus tard, les tests d'intégration
                        de l'objet nuage étant concluants, j'ai{' '}
                        <strong>
                            recruté trois développeurs et un alternant
                        </strong>{' '}
                        malgache. Le but de cette équipe était notamment
                        d'accompagner la croissance et le développement de
                        l'entreprise en mettant en place de nouvelles méthodes
                        techniques de dessin et de contrôle qualité.
                    </p>
                    <p className="exp-text">
                        {'\u2022 '} La seconde année de mon VIE j'avais à la
                        fois une position de <strong>leader technique</strong>{' '}
                        et d'
                        <strong>encadrant / manager</strong> des projets,
                        c'est-à-dire que je faisais le pont entre les demandes
                        des chefs de départements en production et les
                        développeurs. Je m'occupais notamment de la
                        <strong> planification</strong> sur le long terme des
                        projets (sur plusieurs mois). Je programmais des sprints
                        de l'ordre de deux semaines et tous les matins
                        j'organisais le déroulement d'une petite réunion d'une
                        dizaine de minutes où l'équipe abordait les problèmes
                        sur lesquels elle avait travaillé. Je mettais en place
                        également <strong>les dépôts Git</strong> pour que la
                        collaboration de l'équipe se déroule au mieux. Enfin
                        j'avais mis en place également une documentation
                        Développeur ET Utilisateur pour qu'il y ait une trace
                        des fonctionnements de chaque commande.
                    </p>
                    <p className="exp-text">
                        En paralèle de l'équipe de développeurs C++,{' '}
                        <strong> j'encadrais un développeur Python</strong> qui
                        avait développé avec TensorFlow un algorithme de
                        reconnaissance d'images. Lorsque certaines équipes de
                        production étaient en "sous-charge" de travail, en
                        attendant que la charge soit rétablie l'équipe réalisait
                        de l'annotation d'images. Cela consistait à tracer des
                        "Bounding Box" sur des objets ponctuels tels que les
                        bouches à clefs, les regards, les bornes à incendie
                        etc... Cependant la précision exigée par les clients ne
                        nous permettaient pas d'utiliser l'algorithme de deep
                        learning pour du dessin pure mais plutôt pour effectuer
                        un contrôle entre les objets détectés et ceux dessinés
                        en prodution.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experiences
