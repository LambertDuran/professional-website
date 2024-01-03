import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CardItem(props) {

    const navigate = useNavigate();
    
    return (
        <>
            <li className="cards__item"
                onClick={() => {
                        navigate(props.path,{state: {targetId: props.targetId}})
                    }}>
                <Link 
                    className="cards__item__link"
                    to={props.path}>
                    <figure
                        className="cards__item__pic-wrap"
                        data-category={props.label}
                    >
                        <img
                            className="cards__item__img"
                            alt="Travel"
                            src={props.src}
                        />
                    </figure>
                    <div className="cards__item__info">
                        <div className="cards__item__text">{props.text}</div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
