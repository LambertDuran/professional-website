import pdfFile from "../../pdf/CV_Lambert_Duran.pdf";

import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "./Cv.css";

const Cv = () => {
  const [error, setError] = useState(null);
  const downloadStyle = {
    color: "#FFB200",
    position: "absolute",
    top: "-10px",
    left: "-10px",
  };

  const [windowWidth, setWindowWidth] = useState(0);
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setScale(windowWidth / 1000);
  }, [windowWidth]);

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
