const express = require('express');
const cors = require('cors');

require('dotenv').config();

/* Creating express server */
const app = express();
const port = process.env.PORT || 5000;

/* Middleware */
app.use(cors());
app.use(express.json());

/* Route initialisations */
app.use('/customers', require('./routes/customerRoutes.js'));

/* Start the server */
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});