const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router().get('/', async (req, res) => {
  const allCharacters = await Quote.getAll();
  const data = allCharacters.map(({ id, character_id, episode_id }) => ({
    id,
    character_id,
    episode_id,
  }));
  res.json(data);
});
