'use strict';
/* eslint-env node */

const comicsList = [
    {
        name: 'The Amazing Spider-Man',
        issue: 252,
        author: 'Steve Ditko',
        description: 'Spidey comes back from Secret Wars with his new black suit!'
    },
    {
        name: 'Invincible Iron Man',
        issue: 55,
        author: 'Stan Lee',
        description: 'First appearance of Thanos'
    },
    {
        name: 'Groo The Wanderer',
        issue: 1,
        author: 'Sergio Arrigones',
        description: 'First issue'
    },
];

module.exports = {
    list: () => new Promise(resolve => resolve(comicsList))
};
