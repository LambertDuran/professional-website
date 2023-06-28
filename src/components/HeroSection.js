import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import translations from "./json/heroSection.json";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="hero-container">
      <h1>Lambert Duran</h1>
      <p>{translations[language]}</p>
    </div>
  );
}

export default HeroSection;
