import React from 'react'
import '../../App.css'
import './Cv.css'

import { Document, Page, pdfjs } from 'react-pdf'

import pdfFile from '../../pdf/CV_Lambert_Duran.pdf'

class Cv extends React.Component {

    // computeScales = () => {
    //     window.innerWidth / 1000;
    // }

    // window.addEventListener('resize', showDates)

    constructor(props) {
        super(props)
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

        this.state = {
            fileDownloadUrl: null,
        }

        this.download = this.download.bind(this)
        this.scale = window.innerWidth / 1000
    }

    download() {
        // Download it
        const blob = new Blob([pdfFile], { type: 'pdf' })
        const fileDownloadUrl = URL.createObjectURL(blob)
        this.setState({ fileDownloadUrl: fileDownloadUrl }, () => {
            this.dofileDownload.click()
            URL.revokeObjectURL(fileDownloadUrl) // free up storage--no longer needed.
            this.setState({ fileDownloadUrl: '' })
        })
    }

    render() { 
        window.addEventListener('resize', () => { this.scale = window.innerWidth / 1000 })
        return (
            <div className="pdf-container">
                <div className="pdf-viewer">
                    <Document file={pdfFile}>
                        <Page pageNumber={1} scale={this.scale} />
                    </Document>
                    <button className="download-button" onClick={this.download}>
                        <i class="fas fa-cloud-download-alt fa-3x"> </i>
                    </button>
                </div>
                <a
                    className="hidden"
                    href={this.state.fileDownloadUrl}
                    ref={(e) => (this.dofileDownload = e)}
                    download="CV_LambertDuran.pdf"
                >
                    download it
                </a>
            </div>
        )
    }
}

export default Cv

// import PDFViewer from 'pdf-viewer-reactjs'

// import pdfFile from '../../pdf/CV_Lambert_Duran.pdf'

// const Cv = () => {
//     return (
//         <div className="pdf-container">
//             <PDFViewer
//                 document={{
//                     url: '../../pdf/CV_Lambert_Duran.pdf',
//                 }}
//             />
//         </div>
//     )
// }

// export default Cv
