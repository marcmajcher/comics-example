'use strict';

/* eslint-env node */

exports.up = knex => knex.schema.createTable('comics', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.integer('issue').unsigned().notNullable();
    table.string('description').notNullable();
});

exports.down = knex => knex.schema.dropTable('comics');
