import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import './Hobbies.css'
import lusageDuMonde from '../../images/lusageDuMonde.webp'
import lesSecretsDeLaMerRouge from '../../images/lesSecretsDeLaMerRouge.webp'
import lesCavaliers from '../../images/lesCavaliers.webp'
import moto1 from '../../images/moto1.webp'
import moto2 from '../../images/moto2.webp'
import moto3 from '../../images/moto3.webp'
import moto4 from '../../images/moto4.webp'
import moto5 from '../../images/moto5.webp'
import moto6 from '../../images/moto6.webp'

export default function Hobbies() {
    const displaySports = () => {
        return (
            <div className="hobbies-activities">
                <div className="hobbies-text">
                    {'\u2022 '} Tennis de table en club
                </div>
                <div className="hobbies-text">
                    {'\u2022 '} Randonnée: Différentes étapes du GR5 (Les
                    Vosges), du GR10 (Pyrénées), du GR34 (Bretagne), et le GR20
                    (Corse) en totalité !
                </div>
                <div className="hobbies-text">{'\u2022 '} Surf</div>
                <div className="hobbies-text">
                    {'\u2022 '} Moto : Permis A2. <br></br>J'adore les voyages
                    en moto et bivouac sauvage. Une de mes plus grandes
                    aventures a été le tour de Madagascar (environ 5000 km et un
                    mois et demi) en moto et en solitaire !
                </div>
            </div>
        )
    }

    const [mobileScreen, setMobileScreen] = useState(true)

    const showMobileScreen = () => {
        if (window.innerWidth < 800) setMobileScreen(false)
        else setMobileScreen(true)
    }

    useEffect(() => {
        showMobileScreen()
    }, [])

    window.addEventListener('resize', showMobileScreen)

    return (
        <>
            <div className="hobbies-title-container">
                <h1 className="hobbies-title"> Lectures </h1>
                <h1 className="hobbies-title"> </h1>
            </div>
            <div className="hobbies-text">
                {'\u2022'} Très intéressé par l'actualité économique, sociale et
                géopolitique, je suis abonné au monde diplomatique.
            </div>
            <div className="hobbies-text">
                {'\u2022'} Passionné de romans d'aventure, mes auteurs favorits
                ont vécu le siècle dernier. J'ai toujours à mes côtés au moins
                un livre de Joseph Kessel, Nicolas Bouvier ou Henry de
                Montfreid.
            </div>
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
            <div className="hobbies-title-container">
                <h1 className="hobbies-title"> Podcasts</h1>
                <h1 className="hobbies-title"> </h1>
            </div>
            <div className="hobbies-text">
                {'\u2022 '}
                <a
                    href='https://www.franceculture.fr/emissions/les-pieds-sur-terre'
                    target="_blank"
                >
                    Les pieds sur Terre :
                </a>{' '}
                Emission sociologique de France Culture où les locuteurs
                détaillent un fait marquant de leur vie. "Mon histoire d'amour
                durant le confinement", ou bien "Le jour où j'ai assisté à un
                viol" en passant par "Comment j'ai découvert un trésor", tous
                les sujets sont abordés, et sans tabout !
            </div>
            <div className="hobbies-text">
                {'\u2022 '}
                <a
                    href='http://rendezvousavecmrx.free.fr/page/liste.php'
                    target="_blank"
                >
                    Rendez-vous avec X :
                </a>{' '}
                Entretien par Patrick Pesnot de 'Monsieur X', ancien agent de la
                DGSE. Monsieur X revient sur des histoires d'espionnage et des
                affaires secrètes dans lesquelles se jouent l'histoire de nos
                démocraties !
            </div>
            <div className="hobbies-text">
                {'\u2022 '}
                <a
                    href='https://www.youtube.com/c/thinkerview'
                    target="_blank"
                >
                    Thinkerview :
                </a>{' '}
                Chaîne YouTube recevant des journalistes, des diplomates, des
                lanceurs d'aleter etc .. Ils sont invités à s'exprimer sur des
                sujets d'actualité. Dans une société où le temps est compté, ce
                format d'entretien procure une grande bouffée d'air frais, les
                intervenants pouvant prendre la parole jusqu'à 4h sur le sujet
                qu'ils souhaitent !
            </div>
            <div className="hobbies-text">
                {'\u2022 '}
                <a
                    href = 'https://open.spotify.com/show/6NsIUcTCFBIPT7TxP87zdF'
                    target="_blank"
                >
                    Les Baladeurs :
                </a>{' '}
                Une série 'Les others', des histoires et des aventures en pleine
                nature.
            </div>
            <div className="hobbies-title-container">
                <h1 className="hobbies-title"> Sports </h1>
                <h1 className="hobbies-title"> </h1>
            </div>
            <div className="hobbies-title-container">
                {mobileScreen ? (
                    <>
                        {displaySports()}
                        <div className="hobbies-moto">
                            <div className="hobbies-moto-container">
                                <img
                                    className="moto-img1"
                                    src={moto1}
                                    alt="Madagascar"
                                ></img>
                                <img
                                    className="moto-img2"
                                    src={moto2}
                                    alt="Madagascar"
                                ></img>
                                <img
                                    className="moto-img5"
                                    src={moto5}
                                    alt="Madagascar"
                                ></img>
                            </div>
                            <div className="hobbies-moto-container">
                                <img
                                    className="moto-img3"
                                    src={moto3}
                                    alt="Madagascar"
                                ></img>
                                <img
                                    className="moto-img4"
                                    src={moto4}
                                    alt="Madagascar"
                                ></img>
                                <img
                                    className="moto-img6"
                                    src={moto6}
                                    alt="Madagascar"
                                ></img>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="hobbies-activities">
                            {displaySports()}
                            <img
                                className="moto-img-mobile-screen"
                                src={moto1}
                                alt="Madagascar"
                            ></img>
                            <img
                                className="moto-img-mobile-screen"
                                src={moto2}
                                alt="Madagascar"
                            ></img>
                            <img
                                className="moto-img-mobile-screen"
                                src={moto5}
                                alt="Madagascar"
                            ></img>
                            <img
                                className="moto-img-mobile-screen"
                                src={moto3}
                                alt="Madagascar"
                            ></img>
                            <img
                                className="moto-img-mobile-screen"
                                src={moto4}
                                alt="Madagascar"
                            ></img>
                            <img
                                className="moto-img-mobile-screen"
                                src={moto6}
                                alt="Madagascar"
                            ></img>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
