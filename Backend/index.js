const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bfhlRoutes = require('./routers/bfhlRoutes.js');

const app = express();

// Use CORS middleware
app.use(cors());

app.use(bodyParser.json());
app.use('/', bfhlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
