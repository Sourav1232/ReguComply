// PDFSearchComponent.js

import React, { useState } from 'react';
import axios from 'axios';
import './PDFSearchComponent.css'; // Import the CSS file

const PDFSearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Replace 'YOUR_MONGODB_ATLAS_CONNECTION_STRING' with your MongoDB Atlas connection string
      const response = await axios.get(
        `mongodb+srv://Sourav:sourav123@regucomply.rrtldfr.mongodb.net//api/search-pdf?term=${searchTerm}`
      );

      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching PDFs:', error.message);
    }
  };

  return (
    <div className="pdf-search-container">
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar" // Add the class for styling
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((result) => (
            <li key={result._id}>{result.fileName}</li>
            // Customize the display based on your MongoDB document structure
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PDFSearchComponent;
