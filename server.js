// const express = require('express');
// const mongoose = require('mongoose');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());

// // Replace <YOUR_CONNECTION_STRING> with your MongoDB Atlas connection string
// // const mongoURI = 'mongodb+srv://Sourav:sourav123@regucomply.rrtldfr.mongodb.net/';
// const mongoURI ='mongodb+srv://Sourav:sourav123@pdfsavingdump.qgpom.mongodb.net/ReguComply'

// const pdfSchema = new mongoose.Schema({
//     name: String,
//     data: Buffer,
// });

// const PDF = mongoose.model('PDF', pdfSchema);

// app.get('/api/search-pdf', async (req, res) => {
//     const searchTerm = req.query.term;

//     try {
//         const searchResults = await PDF.find({ $text: { $search: searchTerm } });
//         res.json(searchResults);
//     } catch (error) {
//         console.error('Error searching PDFs:', error.message);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// // Fetch and store PDF data from http://localhost:5000/data
// app.get('/fetch-and-store-pdf', async (req, res) => {
//     try {
//         console.log('Fetching data from PDF API...');
//         const apiResponse = await axios.get('http://localhost:5000/data');
//         console.log('Data fetched successfully:', apiResponse.data);

//         // Save the data to MongoDB
//         const newPdf = new PDF({
//             name: 'dummy.pdf',
//             data: Buffer.from('Dummy PDF Data'),
//         });
//         await newPdf.save();;

//         res.json({ success: true, message: 'PDF data fetched and stored successfully' });
//     } catch (error) {
//         console.error('Error fetching and storing PDF data:', error);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Replace <YOUR_CONNECTION_STRING> with your MongoDB Atlas connection string
const mongoURI ='mongodb+srv://Sourav:sourav123@pdfsavingdump.qgpom.mongodb.net/ReguComply';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

const pdfSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
});

const PDF = mongoose.model('PDF', pdfSchema);

app.get('/api/search-pdf', async (req, res) => {
    const searchTerm = req.query.term;

    try {
        const searchResults = await PDF.find({ $text: { $search: searchTerm } });
        res.json(searchResults);
    } catch (error) {
        console.error('Error searching PDFs:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch and store PDF data from http://localhost:5000/data
app.get('/fetch-and-store-pdf', async (req, res) => {
    try {
        console.log('Fetching data from PDF API...');
        const apiResponse = await axios.get('http://localhost:5000/data');
        
        // Log whether data was fetched successfully or not
        if (apiResponse && apiResponse.data) {
            console.log('Data fetched successfully:', apiResponse.data);

            // Save the data to MongoDB
            const newPdf = new PDF({
                name: 'dummy.pdf',
                data: Buffer.from(apiResponse.data),
            });
            await newPdf.save();

            res.json({ success: true, message: 'PDF data fetched and stored successfully' });
        } else {
            console.log('No data fetched from the API');
            res.json({ success: false, message: 'No data fetched from the API' });
        }
    } catch (error) {
        console.error('Error fetching and storing PDF data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
