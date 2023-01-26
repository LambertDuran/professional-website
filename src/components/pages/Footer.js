import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Site web développé en ReactJS
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>A propos</h2>
            <p2>Lambert Duran,</p2>
            <p2>Ingénieur logiciel,</p2>
            <p2>26 ans</p2>
          </div>
          <div class="footer-link-items">
            <h2>Me contacter</h2>
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
