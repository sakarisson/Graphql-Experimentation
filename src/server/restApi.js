const express = require('express');
const data = require('./Data');

const { books } = data;

const restApi = express.Router();

restApi.get('/', (req, res) => {
  res.json({ data: 'This is a rest API using JSON' });
});

restApi.get('/books', (req, res) => {
  res.json(books);
});

restApi.post('/books', (req, res, next) => {
  const { body } = req;
  const { title, author } = body;
  if (!title || !author) {
    next();
    return;
  }
  const book = { title, author };
  books.push(book);
  res.json(book);
});

module.exports = restApi;