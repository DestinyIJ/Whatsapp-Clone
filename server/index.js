const express = require('express')
const app = express()
const http = require('http');
const url = require('url');
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);
require('dotenv/config');


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});


const PORT = process.env.SERVER_PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});