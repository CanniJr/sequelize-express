const express = require("express");
const exphandle = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.get();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
