#!/bin/bash

const fs = require('fs');
const http = require('http');
const express = require('express');

const app = express();
app.use(express.static(__dirname));

http.createServer(app)
  .listen(process.env.PORT || 8000)