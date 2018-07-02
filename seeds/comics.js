'use strict';

/* eslint-env node */

const comicsList = [{
    title: 'The Amazing Spider-Man',
    issue: 252,
    author: 'Steve Ditko',
    description: 'Spidey comes back from Secret Wars with his new black suit!'
  },
  {
    title: 'Invincible Iron Man',
    issue: 55,
    author: 'Stan Lee',
    description: 'First appearance of Thanos'
  },
  {
    title: 'Groo The Wanderer',
    issue: 1,
    author: 'Sergio Arrigones',
    description: 'First issue'
  },
];

exports.seed = knex => knex('comics').del()
  .then(() => knex('comics').insert(comicsList));