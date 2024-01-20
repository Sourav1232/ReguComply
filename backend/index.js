const axios = require('axios');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/regu', {
});

const AnotherCollectionSchema = new mongoose.Schema({
    name: String,
    rank: Number,
});

const AnotherCollection = mongoose.model('AnotherCollection', AnotherCollectionSchema);

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/mens');
        const mensData = response.data;

        await AnotherCollection.insertMany(mensData);

        console.log('Data successfully fetched and stored in the new collection.');
    } catch (error) {
        console.error('Error fetching or storing data:', error.message);
    } finally {
        mongoose.disconnect();
    }
};

fetchData();
