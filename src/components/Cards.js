import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

import couches_geo from '../images/couches_geo.gif'
import cloud from '../images/cloud.webp'
import recalage from '../images/cerveau.webp'
import importShape from '../images/importShape.webp'

function Cards() {
    return (
        <div className="cards">
            <h1>Quelques exemples de réalisations !</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={couches_geo}
                            text="Modélisation de couches géologiques à partir de MNT"
                            label="C++ / 3D / Modélisation"
                            path="/experiences"
                        />
                        <CardItem
                            src={importShape}
                            text="Import de fichiers shape dans AutoCAD"
                            label="C++ / C / .shp / QGis / AutoCAD"
                            path="/experiences"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={recalage}
                            text="Recalgage élastique d'images"
                            label="C++ / Multi-threading / Recalage d'images / Méthode de gradients"
                            path="/experiences"
                        />
                        <CardItem
                            src={cloud}
                            text="Affichage de nuages de points en 3D"
                            label="C++ / 3D / PCL / Traitement de données"
                            path="/experiences"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
