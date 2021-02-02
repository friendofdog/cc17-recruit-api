INSERT INTO recruiters
  (name_first, name_last)
VALUES
  ('Some', 'Guy'),
  ('Another', 'Person'),
  ('Kentaro', 'Namahamu');

INSERT INTO companies
  (name, recruiter_id)
VALUES
  ('Oyaji Inc.', 1),
  ('Marimo Partners', 2),
  ('Temp-for-life', 3),
  ('Sketchy Gaishike', 1);

INSERT INTO candidates
  (name_first, name_last, summary, recruiter_id)
VALUES
  ('The', 'Tick', 'Hello this is a candidate', 1),
  ('Arthur', 'Everest', 'Bye this is a candidate', 2),
  ('American', 'Maid', 'Greetings this is a candidate', 3),
  ('Die', 'Die Fledermaus', 'Ohayo this is a candidate', 1),
  ('Big', 'Shot', 'Bonjour this is a candidate', 2),
  ('Sewer', 'Urchin', 'Yo this is a candidate', 3),
  ('Dinosaur', 'Neil', 'Hey this is a candidate', 1),
  ('Dot', 'Everest', 'Konichiwa this is a candidate', 2);

INSERT INTO jobs
  (name, summary, company_id, recruiter_id)
VALUES
  ('Underpaid Developer', 'Code, monkey, code!', 1, 1),
  ('Undecided', 'No idea what you do', 1, 2),
  ('Deadend Temp', 'Stay here forever', 2 ,2),
  ('Actually Two Jobs', 'We are cheap', 2, 2),
  ('Not Even One Job', 'Fishing for resumes', 3, 3),
  ('You Decide', 'Space filler', 3, 1),
  ('Resident English Speaker', 'Wakanai', 4, 3),
  ('Retired', 'Zzzzzz', 4, 1);

INSERT INTO candidates_jobs
  (candidate_id, job_id)
VALUES
  (1, 4),
  (1, 3),
  (2, 2),
  (2, 4),
  (2, 6),
  (3, 5),
  (4, 1),
  (6, 5),
  (6, 7),
  (7, 3),
  (8, 7),
  (8, 1),
  (8, 5)
