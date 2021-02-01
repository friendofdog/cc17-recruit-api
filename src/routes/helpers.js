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
  await knex.from(model).where(identifier, id).asCallback((err, entry) => {
    if (err) return console.error(err);
    res.status(200);
    res.send(entry);
  });
};

const createSingle = async (model, req, res) => {
  await knex(model).insert(req.query).asCallback((err, entry) => {
    if (err) return console.error(err);
    res.status(201);
    res.send(entry);
  });
};

const updateSingle = async (model, req, res) => {
  const { id } = req.params;
  await knex(model).where("id", id).update(req.query).asCallback(
    (err, _) => {
      if (err) return console.error(err);
      res.sendStatus(204);
    }
  );
}

// TODO: Method incomplete. Need to deal with many-to-many relationship between
// recruiters and jobs.
const deleteSingle = async (model, req, res) => {
  const { id } = req.params;
  await knex(model).where("id", id).del().asCallback((err, _) => {
    if (err) return console.error(err);
    res.sendStatus(204);
  });
}

module.exports = {
  createSingle,
  deleteSingle,
  getAll,
  getSingle,
  updateSingle
};
