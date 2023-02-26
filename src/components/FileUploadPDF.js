import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import '../css/FileUpload.css';
import jsPDF from 'jspdf';

function FileUploadPDF() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [summarizedText, setSummarizedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [fileUploaded, setFileUploaded] = useState(false);
    const currentDate = new Date();
  
    const handleFileInputChange = (event) => {
      setSelectedFile(event.target.files[0]);
      setSummarizedText(null); // Reset summarizedText when a new file is uploaded
      setFileUploaded(false); // Reset fileUploaded when a new file is uploaded
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      axios
        .post('http://127.0.0.1:5001/upload-pdf', formData)
        .then((response) => {
          console.log(response.data);
          setFileUploaded(true); // Set fileUploaded to true when the file is successfully uploaded
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const handleSummarize = (event) => {
      event.preventDefault();
  
      setIsLoading(true);
  
      axios
        .get('http://127.0.0.1:5001/summarize-pdf')
        .then((response) => {
          setSummarizedText(response.data.summary);
          setIsLoading(false);
          console.log(response.data.summary);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    };
  
    const handleDownload = () => {
        // Create a new jspdf instance
const doc = new jsPDF();

// Set document font and size
doc.setFont('helvetica', 'normal');
doc.setFontSize(12);

// Define the maximum width for the text
const maxWidth = 180;

// Split the text into an array of strings that fit within the maximum width
const lines = doc.splitTextToSize(summarizedText, maxWidth);

// Loop through each line of text and add it to the PDF
for (let i = 0; i < lines.length; i++) {
  const text = lines[i];
  const lineHeight = doc.getLineHeight();
  const x = 20;
  const y = 20 + (i * lineHeight);
  doc.text(text, x, y);
}

// Save and download the PDF file
doc.save('summary.pdf');

            // // Create a new jspdf instance
            // const doc = new jsPDF();
        
            // // Set document font and size
            // doc.setFont('helvetica', 'normal');
            // doc.setFontSize(12);
        
            // // Add text to PDF
            // doc.text(summarizedText, 20, 20);
        
            // // Save and download the PDF file
            // doc.save('summary.pdf');

    //   downloadFile(
    //     summarizedText,
    //     'summary.pdf',
    //     'application/pdf'
    //   );
    };
  
    return (
      <div className="file-upload">
        <h2>Upload a PDF file</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="file-upload__label">Choose a file:</Form.Label>
            <Form.Control type="file" onChange={handleFileInputChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Upload
          </Button>
        </Form>
        <Button variant="primary" onClick={handleSummarize} disabled={!fileUploaded}>
          Summarize
        </Button>
        {isLoading && <p>Waiting for summary...</p>}
        {summarizedText && (
          <div>
            <p>Summary is done!</p>
            <Button variant="primary" onClick={handleDownload}>
              Download Summary
            </Button>
          </div>
        )}
        {!selectedFile && !summarizedText && fileUploaded && (
          <p>Upload, download, and summary is done text should disappear.</p>
        )}
      </div>
    );
  }

  export default FileUploadPDF;