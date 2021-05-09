const express = require('express');
const mongoose = require("mongoose");

const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));