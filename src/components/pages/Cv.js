import React from 'react'
import '../../App.css'
import './Cv.css'

// import { Document, Page, pdfjs } from 'react-pdf'

// import pdfFile from '../../pdf/CV_Lambert_Duran.pdf'
// // import { findByLabelText } from '@testing-library/react'

// class Cv extends React.Component {
//     constructor(props) {
//         super(props)
//         pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

//         this.state = {
//             fileDownloadUrl: null,
//         }

//         this.download = this.download.bind(this)
//     }

//     download() {
//         // Download it
//         const blob = new Blob([pdfFile], { type: 'pdf' })
//         const fileDownloadUrl = URL.createObjectURL(blob)
//         this.setState({ fileDownloadUrl: fileDownloadUrl }, () => {
//             this.dofileDownload.click()
//             URL.revokeObjectURL(fileDownloadUrl) // free up storage--no longer needed.
//             this.setState({ fileDownloadUrl: '' })
//         })
//     }

//     render() {
//         return (
//             <div className="pdf-container">
//                 <div className="pdf-viewer">
//                     <Document file={pdfFile} className="pdf-viewer">
//                         <Page pageNumber={1} scale={1.5} />
//                     </Document>
//                     <button className="download-button" onClick={this.download}>
//                         <i class="fas fa-cloud-download-alt fa-3x"> </i>
//                     </button>
//                 </div>
//                 <a
//                     className="hidden"
//                     href={this.state.fileDownloadUrl}
//                     ref={(e) => (this.dofileDownload = e)}
//                     download="CV_LambertDuran.pdf"
//                 >
//                     download it
//                 </a>
//             </div>
//         )
//     }
// }

// export default Cv

import PDFViewer from 'pdf-viewer-reactjs'

import pdfFile from '../../pdf/CV_Lambert_Duran.pdf'

const Cv = () => {
    return (
        <div className="pdf-container">
            <PDFViewer
                document={{
                    base64: '../../pdf/CV_Lambert_Duran.pdf',
                }}
            />
        </div>
    )
}

export default Cv
