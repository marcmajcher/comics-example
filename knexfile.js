'use strict';

/* eslint-env node */

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/comix-example'
  },
  production: {
    client: 'pg',
    connection: 'postgres://aqwmgbbrkbkazo:75035cf835e85884aa9260eb02f33bbbac8be2ef009f7055c000cd9194c3d0a9@ec2-54-163-237-249.compute-1.amazonaws.com:5432/d23ujh8rck5c37'
  }
};
