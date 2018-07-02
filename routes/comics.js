'use strict';

/* eslint-env node */
/* eslint-disable no-use-before-define */

const express = require('express');
const router = express.Router();
const Comic = require('../models/comics');

router.get('/', listComics);

/* router functions */

function listComics(req, res) {
  Comic.list().then((data) => {
    res.render('comics', {
      data
    });
  });
}

module.exports = router;
