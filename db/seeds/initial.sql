INSERT INTO recruiters
  (id, name_first, name_last)
VALUES
  (1, 'Some', 'Guy'),
  (2, 'Another', 'Person'),
  (3, 'Kentaro', 'Namahamu');

INSERT INTO companies
  (id, name, recruiter_id)
VALUES
  (1, 'Oyaji Inc.', 1),
  (2, 'Marimo Partners', 2),
  (3, 'Temp-for-life', 3),
  (4, 'Sketchy Gaishike', 1);

INSERT INTO candidates
  (id, name_first, name_last, summary, recruiter_id)
VALUES
  (1, 'The', 'Tick', 'Hello this is a candidate', 1),
  (2, 'Arthur', 'Everest', 'Bye this is a candidate', 2),
  (3, 'American', 'Maid', 'Greetings this is a candidate', 3),
  (4, 'Die', 'Die Fledermaus', 'Ohayo this is a candidate', 1),
  (5, 'Big', 'Shot', 'Bonjour this is a candidate', 2),
  (6, 'Sewer', 'Urchin', 'Yo this is a candidate', 3),
  (7, 'Dinosaur', 'Neil', 'Hey this is a candidate', 1),
  (8, 'Dot', 'Everest', 'Konichiwa this is a candidate', 2);

INSERT INTO jobs
  (id, name, summary, company_id, recruiter_id)
VALUES
  (1, 'Underpaid Developer', 'Code, monkey, code!', 1, 1),
  (2, 'Undecided', 'No idea what you do', 1, 2),
  (3, 'Deadend Temp', 'Stay here forever', 2 ,2),
  (4, 'Actually Two Jobs', 'We are cheap', 2, 2),
  (5, 'Not Even One Job', 'Fishing for resumes', 3, 3),
  (6, 'You Decide', 'Space filler', 3, 1),
  (7, 'Resident English Speaker', 'Wakanai', 4, 3),
  (8, 'Retired', 'Zzzzzz', 4, 1);

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
