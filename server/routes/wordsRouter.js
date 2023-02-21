const express = require('express');

const { Op } = require('sequelize');
const { Word } = require('../db/models');

const router = express.Router();

router.post('/words', async (req, res) => {
  const word = req.body;
  try {
    await Word.create(word);
    res.sendStatus(200);
  } catch (er) {
    console.log(er);
    return res.sendStatus(401);
  }
});

router.get('/wordsget', async (req, res) => {
  try {
    const words = await Word.findAll();
    res.json(words);
  } catch (er) {
    console.log(er);
    return res.sendStatus(401);
  }
});

router.post('/wordsall', async (req, res) => {
  const { input } = req.body;
  const words = await Word.findAll({
    where: {
      word: {
        [Op.like]: `%${input}%`,
      },
    },
  });
  res.json(words);
});

module.exports = router;
