const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

// Connect to MongoDB Atlas (replace <your-connection-string> with your actual connection string)
mongoose.connect('mongodb+srv://Sourav:sourav123@pdfsavingdump.qgpom.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB Atlas'));

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// MongoDB schema for storing PDF files
const pdfSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
});

const Pdf = mongoose.model('Pdf', pdfSchema);

// Enable pre-flight requests for all routes
app.options('*', cors());

// Endpoint for handling file uploads
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const newPdf = new Pdf({
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();

    res.status(201).json({ message: 'File uploaded successfully' });
    
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for fetching and displaying data
app.get('/data', async (req, res) => {
  try {
    const pdfData = await Pdf.find();
    res.status(200).json(pdfData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
