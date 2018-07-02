'use strict';
/* eslint-env node */

const express = require('express');
const router = express.Router();
const Comic = require('../models/comics');
console.log(Comic);

router.get('/', (req, res) => {
  console.log(Comic.list)
   Comic.list().then((data) => {
    console.log(data);
    res.send(data);
  });
});

module.exports = router;
