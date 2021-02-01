const express = require("express");

const app = require("../server");
const { RECRUITERS, JOBS, COMPANIES, CANDIDATES } = require("./models");
const { createSingle, getAll, getSingle } = require("./helpers");

app.use(express.json());

/* GET */
app.get(`/api/${RECRUITERS}`, async (req, res) => {
  await getAll(RECRUITERS, res);
});

app.get(`/api/${RECRUITERS}/:id`, async (req, res) => {
  await getSingle(RECRUITERS, "id", req, res);
});

app.get(`/api/${RECRUITERS}/:id/jobs`, async (req, res) => {
  await getSingle(JOBS, "recruiter_id", req, res);
});

app.get(`/api/${RECRUITERS}/:id/companies`, async (req, res) => {
  await getSingle(COMPANIES, "recruiter_id", req, res);
});

app.get(`/api/${RECRUITERS}/:id/candidates`, async (req, res) => {
  await getSingle(CANDIDATES, "recruiter_id", req, res);
});

/* POST */
app.post(`/api/${RECRUITERS}`, async (req, res) => {
  await createSingle(RECRUITERS, req, res);
});
