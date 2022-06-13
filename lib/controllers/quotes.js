const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const saying = await Quote.insert(req.body);
    res.json(saying);
  } catch (e) {
    next(e);
  }
});
