DROP TABLE IF EXISTS candidates_jobs;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS candidates;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS recruiters;

CREATE TABLE recruiters (
  id serial,
  name_first VARCHAR(60) NOT NULL,
  name_last VARCHAR(60) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE companies (
  id serial,
  name VARCHAR(100) NOT NULL,
  recruiter_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (recruiter_id) REFERENCES recruiters(id) ON DELETE CASCADE
);

CREATE TABLE candidates (
  id serial,
  name_first VARCHAR(60) NOT NULL,
  name_last VARCHAR(60) NOT NULL,
  summary VARCHAR(255),
  recruiter_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (recruiter_id) REFERENCES recruiters(id) ON DELETE CASCADE
);

CREATE TABLE jobs (
  id serial,
  name VARCHAR(100) NOT NULL,
  summary VARCHAR(255),
  company_id INT NOT NULL,
  recruiter_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE,
  FOREIGN KEY (recruiter_id) REFERENCES recruiters(id) ON DELETE CASCADE
);

CREATE TABLE candidates_jobs (
  candidate_id int NOT NULL,
  job_id int NOT NULL,
  PRIMARY KEY (candidate_id, job_id),
  FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON UPDATE CASCADE,
  FOREIGN KEY (job_id) REFERENCES jobs(id) ON UPDATE CASCADE
);
