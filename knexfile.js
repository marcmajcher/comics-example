'use strict';

/* eslint-env node */

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/comix-example'
  },
  production: {
    client: 'pg',
    connection: 'wherever the hell our database lives'
  }
};
