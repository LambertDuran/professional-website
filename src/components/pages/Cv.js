import pdfFile from "../../pdf/CV_Lambert_Duran.pdf";

import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "./Cv.css";

const Cv = () => {
  const [pageNumber] = useState(1);
  const [error, setError] = useState(null);
  const downloadStyle = {
    color: "#FFB200",
    position: "absolute",
    top: "-10px",
    left: "-10px",
  };

  return (
    <>
      <button className="download-button">
        <a href={pdfFile} download>
          <i class="fas fa-cloud-download-alt fa-4x" style={downloadStyle}></i>
        </a>
      </button>
      <div className="pdf-container">
        <Document file={pdfFile} onLoadError={(error) => setError(error)}>
          <Page pageNumber={pageNumber} />
        </Document>
        {error && <p>Failed to load PDF file : {error}</p>}
      </div>
    </>
  );
};

export default Cv;
