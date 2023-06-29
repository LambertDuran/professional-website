import pdfFileFr from "../../pdf/CV_Lambert_Duran_fr.pdf";
import pdfFileEn from "../../pdf/CV_Lambert_Duran_en.pdf";

import { LanguageContext } from "../LanguageContext";
import React, { useState, useContext } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "./Cv.css";

const Cv = () => {
  const { language } = useContext(LanguageContext);
  const pdfFile = language === "fr" ? pdfFileFr : pdfFileEn;
  const [error, setError] = useState(null);
  const downloadStyle = {
    color: "#FFB200",
    position: "absolute",
    top: "-10px",
    left: "-10px",
  };

  const [scale] = useState(window.innerWidth / 800);

  return (
    <>
      <button className="download-button">
        <a href={pdfFile} download>
          <i class="fas fa-cloud-download-alt fa-4x" style={downloadStyle}></i>
        </a>
      </button>
      <div className="pdf-container">
        <Document file={pdfFile} onLoadError={(error) => setError(error)}>
          <Page scale={scale} pageNumber={1} />
        </Document>
        {error && <p>Failed to load PDF file : {error}</p>}
      </div>
    </>
  );
};

export default Cv;
