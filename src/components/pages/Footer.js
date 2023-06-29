import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./Footer.css";

import translations from "../json/footer.json";

function Footer() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          {translations[language].title}
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>{translations[language].title2}</h2>
            <p2>Lambert Duran,</p2>
            <p2>{translations[language].profession}</p2>
            <p2>{translations[language].age}</p2>
          </div>
          <div class="footer-link-items">
            <h2>{translations[language].title3}</h2>
            <p2>07.83.91.42.72</p2>
            <p2>lambert.drn@gmail.com</p2>
            <p2>55 Rue des Rigoles, Paris</p2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
