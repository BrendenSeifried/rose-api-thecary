const { Router } = require('express');
const { Episode } = require('../models/Episode');

module.exports = Router().get('/', async (req, res) => {
  const allEpsiodes = await Episode.getAll();
  res.json(allEpsiodes);
});
