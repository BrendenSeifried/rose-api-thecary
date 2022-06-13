const { Router } = require('express');
const { Episode } = require('../models/Episode');

// module.exports = Router().get('/', async (req, res) => {
//   const allepisodes = await Episode.getAll();
//   res.json(allepisodes);
// });

module.exports = Router().get('/', async (req, res) => {
  const allCharacters = await Episode.getAll();
  const data = allCharacters.map(
    ({ id, episode_id, character_id, detail }) => ({
      id,
      episode_id,
      character_id,
      detail,
    })
  );
  res.json(data);
});
