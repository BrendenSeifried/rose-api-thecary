const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router().get('/', async (req, res) => {
  const allCharacters = await Character.getAll();
  //   const data = allCharacters.map(({ id, quotes }) => ({ id, quotes }));

  res.json(allCharacters);
});
