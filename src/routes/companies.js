const express = require("express");

const app = require("../server");
const { RECRUITERS, JOBS, COMPANIES } = require("./models");
const {
  createSingle, deleteSingle, getAll, getSingle, getSingleForeign, updateSingle
} = require("./helpers");

app.use(express.json());

/* GET */
app.get(`/api/${COMPANIES}`, async (_, res) => {
  await getAll(COMPANIES, res);
});

app.get(`/api/${COMPANIES}/:id`, async (req, res) => {
  await getSingle(COMPANIES, "id", req, res);
});

app.get(`/api/${COMPANIES}/:id/jobs`, async (req, res) => {
  await getSingle(JOBS, "company_id", req, res);
});

// TODO: Get recruiter using the below route
// app.get(`/api/${COMPANIES}/:id/recruiter`, async (req, res) => {
//   await getSingleForeign(RECRUITERS, "id", req, res);
// });

/* POST */
app.post(`/api/${COMPANIES}`, async (req, res) => {
  await createSingle(COMPANIES, req, res);
});

/* PUT */
app.put(`/api/${COMPANIES}/:id`, async (req, res) => {
  await updateSingle(COMPANIES, req, res);
});

/* DELETE */
app.delete(`/api/${COMPANIES}/:id`, async (req, res) => {
  await deleteSingle(COMPANIES, req, res);
});
