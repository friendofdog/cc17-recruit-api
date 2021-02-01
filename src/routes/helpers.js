const knex = require("../knex");

const getAll = async (model, res) => {
  await knex.select().from(model).asCallback((err, entries) => {
    if (err) return console.error(err);
    res.status(200);
    res.send(entries);
  });
};

const getSingle = async (model, identifier, req, res) => {
  const { id } = req.params;
  await knex.from(model).where(identifier, id).asCallback((err, entries) => {
    if (err) return console.error(err);
    res.status(200);
    res.send(entries);
  });
};

module.exports = {
  getAll,
  getSingle
};
