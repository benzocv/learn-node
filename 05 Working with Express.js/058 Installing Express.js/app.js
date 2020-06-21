const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(express);

server.listen(3000);

