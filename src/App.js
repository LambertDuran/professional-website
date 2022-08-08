import React from 'react'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Accueil from './components/pages/Accueil'
import Cv from './components/pages/Cv'
import Experiences from './components/pages/Experiences'
import Hobbies from './components/pages/Hobbies'

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Accueil />} />
                    <Route path="/cv" element={<Cv />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                    <Route path="*" element={<Accueil />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
