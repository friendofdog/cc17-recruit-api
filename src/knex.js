const environment = process.env.ENVIRONMENT || "dev";
const config = require("./knexfile")[environment];
const knex = require("knex")(config);

knex.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
});

module.exports = knex;
