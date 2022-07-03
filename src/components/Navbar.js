import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        Home
                        <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link
                                to="/cv"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Curriculum Vitae
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/experiences"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Expériences
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/hobbies"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Hobbies
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
