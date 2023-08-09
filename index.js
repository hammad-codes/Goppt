// Author : '@Hammad Habib'
// Application Name: 'Goppt: AI-Powered Slides on the Go'

const express = require("express");
const app = express();
//Package Imports
const path = require("path");
const ejsMate = require("ejs-mate");
const unsplash = require("unsplash-js");
const axios = require("axios");
// File Imports
const { getCompletion } = require("./utilities/palmAPI");
// Routes
const GopptRouter = require("./routes/GopptRouter");
const { title } = require("process");
const { hasSubscribers } = require("diagnostics_channel");
//Configurations
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); //Serving the static files
app.use(express.urlencoded({ extended: true }));
// MiddleWares
app.use("/", GopptRouter);
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
// Routes
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});