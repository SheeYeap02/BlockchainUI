const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
})

app.get("/consumer", (req, res) => {
    res.sendFile(path.join(__dirname + "public/consumer.html"));
})

app.get("/consumer2", (req, res) => {
    res.sendFile(path.join(__dirname + "public/consumer2.html"));
})

app.get("/distributor", (req, res) => {
    res.sendFile(path.join(__dirname + "public/distributor.html"));
})

app.get("/durian-details", (req, res) => {
    res.sendFile(path.join(__dirname + "public/durian-details.html"));
})

app.get("/farmer", (req, res) => {
    res.sendFile(path.join(__dirname + "public/farmer.html"));
})

app.get("/quickstart", (req, res) => {
    res.sendFile(path.join(__dirname + "public/quickstart.html"));
})

app.get("/retailer", (req, res) => {
    res.sendFile(path.join(__dirname + "public/retailer.html"));
})



const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);
