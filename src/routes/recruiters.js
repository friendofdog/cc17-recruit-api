const express = require("express");

const app = require("../server");
const knex = require("../knex");
const { RECRUITERS, JOBS, COMPANIES, CANDIDATES } = require("./models");

app.use(express.json());

app.get(`/api/${RECRUITERS}`, async (req, res) => {
  await knex.select().from(RECRUITERS).asCallback((err, entries) => {
    if (err) return console.error(err);
    res.status(200);
    res.send(entries);
  });
});

app.get(`/api/${RECRUITERS}/:id`, async (req, res) => {
  const { id } = req.params;
  await knex().from(RECRUITERS).where('id', id).asCallback((err, entries) => {
    if (err) return console.error(err);
    res.status(200);
    res.send(entries);
  })
});

app.get(`/api/${RECRUITERS}/:id/jobs`, async (req, res) => {
  const { id } = req.params;
  await knex().from(JOBS).where('recruiter_id', id).asCallback((err, entries) => {
    if (err) return console.error(err);
    res.status(200);
    res.send(entries);
  })
});

app.get(`/api/${RECRUITERS}/:id/companies`, async (req, res) => {
  const { id } = req.params;
  await knex().from(COMPANIES).where('recruiter_id', id).asCallback((err, entries) => {
    if (err) return console.error(err);
    res.status(200);
    res.send(entries);
  })
});

app.get(`/api/${RECRUITERS}/:id/candidates`, async (req, res) => {
  const { id } = req.params;
  await knex().from(CANDIDATES).where('recruiter_id', id).asCallback((err, entries) => {
    if (err) return console.error(err);
    res.status(200);
    res.send(entries);
  })
});
