const knex = require("knex");
const config = require("./knexfile");

builder = knex(config[process.env.ENV] || config.dev);
builder.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
});

module.exports = builder;
