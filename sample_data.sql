INSERT INTO clinic
values(100, 'sql clinic', '123 sql ln.', 'CA', 1234 );

INSERT INTO patient
values('500-12', '123-45-6789', DATE '1990-01-01', 'John', 'Doe', '555-555-5555', 'JohnDoe@gmail.com', 'Insurance Inc.');

INSERT INTO interview
values(5050, 'both', 'Constant', 'Gradual', 'Year Ago','Y', 'Very loud', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 5, 5, 5, 'Not sure about severity', 'Y', 'Everyday', 'None', 'hours', 'Y', 50, 'Y', 'None', 'Interferes with life', 'Y', 'Y', 'Ringing', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'N', 'Y', 'Y', 'Y', 'N', 5, 5, 5, 'No comment', 'Y', 'Everyday', 'Stronger', 'days', 'Y', 50, 'Y', 'None', 'Severity is issue', 'Y', 'Y', 'In Ear', 'N', 'Tinnitus', 'Hearing Aid', 5, 4, 3, 'Agrees', '1 month', Null, Null, Null, Null, Null);

INSERT INTO visit
values(8090, 0, DATE '2019-11-27', '500-12', 100, 5050);

