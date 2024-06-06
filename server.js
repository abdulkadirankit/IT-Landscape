const express = require('express');
const connectDB = require('./db');  // db.js dosyasını dahil ediyoruz

const app = express();

// MongoDB bağlantısını başlat
connectDB();

app.get('/', (req, res) => res.send('IT Landscape Projesi'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
