'use strict';
/* eslint-env node */

const express = require('express');
const router = express.Router();
const Comic = require('../models/comics');

router.get('/', (req, res) => {
  Comic.list().then((data) => {
    res.render('comics', {
      data
    });
  });
});

module.exports = router;
