
const express = require('express');
const modelSynchronization = require("./DBConfig/Synchronization");
const cors = require("cors");
const multiplicationRouter = require("./Controller/MultiplicationController");
const bodyParser = require("body-parser");

const app = express();

const port = 5000;

// Middleware setup
app.use(bodyParser.json()); // Parse incoming request bodies as JSON
app.use(cors()); // Enable CORS for cross-origin requests

// Route setup
app.use("/api/multiplication", multiplicationRouter);

// Start the server and synchronize models
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    try {
        modelSynchronization().then(() => console.log("Successfully listening on port ", port));
    } catch (err) {
        console.error(err);
    }
});
