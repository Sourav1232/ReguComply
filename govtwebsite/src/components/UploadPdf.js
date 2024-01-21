// File: src/components/UploadPDF.js
import React, { useState } from 'react';
import axios from 'axios';
import './UploadPdf.css'


const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('pdf', selectedFile);
  
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="upload-container">
      <div className='innerContainer'>
      <h2>Upload Document</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div></div>
  );
};

export default UploadPDF;
