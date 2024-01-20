// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000; // Choose a port

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// MongoDB Atlas connection URI
const mongoURI = 'mongodb+srv://Sourav:sourav123@pdfsavingdump.qgpom.mongodb.net/';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Create a mongoose model for your PDFs
const PdfModel = mongoose.model('Pdf', {
  name: String,
  content: Buffer,
});

// API endpoint to search and retrieve PDFs
app.get('/api/pdf/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const pdf = await PdfModel.findOne({ name });

    if (!pdf) {
      return res.status(404).json({ error: 'PDF not found' });
    }

    res.contentType('application/pdf');
    res.send(pdf.content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
