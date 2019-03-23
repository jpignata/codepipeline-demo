const express = require('express');
const fetch = require('node-fetch');

const endpoint = 'https://api.giphy.com/v1/gifs/trending';
const key = process.env.API_KEY;
const port = process.env.PORT || 3000;
const app = express();

// Returns a random GIF from Giphy's trending API
app.get('/', async (req, res) => {
  const response = await fetch(`${endpoint}?api_key=${key}&rating=g&limit=25`);
  const json = await response.json();
  const url = json.data[0].images.original.url;

  res.end(`<html><img height="100%" width="100%" src="${url}"></html>`);
});

// Health check endpoint for Elastic Load Balancing
app.get('/ping', (req, res) => res.send('PONG'));

app.listen(port); 
