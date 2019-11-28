-- Generated by Oracle SQL Developer Data Modeler 19.2.0.182.1216
--   at:        2019-11-26 15:30:53 PST
--   site:      Oracle Database 11g
--   type:      Oracle Database 11g



CREATE TABLE clinic (
    clinic_number    INTEGER NOT NULL,
    name             VARCHAR2(20) NOT NULL,
    address_line_1   VARCHAR2(20) NOT NULL,
    state            VARCHAR2(10) NOT NULL,
    zip              INTEGER NOT NULL
);

ALTER TABLE clinic ADD CONSTRAINT clinic_pk PRIMARY KEY ( clinic_number );

CREATE TABLE interview (
    id                             INTEGER NOT NULL,
    tin_area                       VARCHAR2(4),
    tin_area_freq                  VARCHAR2(13),
    tin_onset                      VARCHAR2(8),
    tin_when                       VARCHAR2(15),
    tin_fluctuations               VARCHAR2(1),
    tin_desc_of_t_sound            VARCHAR2(50),
    tin_activities_concentration   VARCHAR2(1),
	tin_activities_sleep           VARCHAR2(1),
    tin_activities_qra             VARCHAR2(1),
    tin_activities_work            VARCHAR2(1),
    tin_activities_restaurants     VARCHAR2(1),
    tin_activities_sports          VARCHAR2(1),
    tin_activities_social          VARCHAR2(1),
    tin_activities_other           VARCHAR2(1),
    tin_severity                   INTEGER,
    tin_annoyance                  INTEGER,
    tin_effectonlife               INTEGER,
    tin_comments                   VARCHAR2(50),
    tin_bd                         VARCHAR2(1),
    tin_bd_freq                    VARCHAR2(10),
    tin_eff_of_sound               VARCHAR2(6),
    tin_eof_how_long               VARCHAR2(5),
    tin_ear_over                   VARCHAR2(1),
    tin_ear_over_perc              INTEGER,
    tin_ear_over_inquiet           VARCHAR2(1),
    tin_other_t_treat              VARCHAR2(20),
    tin_why_t_prob                 VARCHAR2(20),
    st_oversensitivity             VARCHAR2(1),
    st_phys_dis                    VARCHAR2(1),
    st_desc_of_troub_sounds        VARCHAR2(20),
    st_activities_concerts         VARCHAR2(1),
	st_activities_shopping         VARCHAR2(1),
    st_activities_movies           VARCHAR2(1),
    st_activities_work             VARCHAR2(1),
    st_activities_restaurants      VARCHAR2(1),
    st_activities_driving          VARCHAR2(1),
    st_activities_sports           VARCHAR2(1),
    st_activities_church           VARCHAR2(1),
    st_activities_housekeeping     VARCHAR2(1),
    st_activities_childcare        VARCHAR2(1),
    st_activities_social           VARCHAR2(1),
    st_activities_other            VARCHAR2(1),
    st_severity                    INTEGER,
    st_annoyance                   INTEGER,
    st_effectonlife                INTEGER,
    st_comments                    VARCHAR2(50),
    st_bd                          VARCHAR2(1),
    st_bd_freq                     VARCHAR2(10),
    st_eff_of_sound                VARCHAR2(8),
    st_eof_how_long                VARCHAR2(5),
    st_ear_over                    VARCHAR2(1),
    st_ear_over_perc               INTEGER,
    st_ear_over_inquiet            VARCHAR2(1),
    st_other_st_treat              VARCHAR2(20),
    st_why_st_prob                 VARCHAR2(20),
    hl_hearing_prob                VARCHAR2(1),
    hl_hearing_aid                 VARCHAR2(1),
	 hl_hearing_aid_type           VARCHAR2(10),
    hl_ever_rec                    VARCHAR2(1),
    hl_category                    VARCHAR2(20),
    hl_rec                         VARCHAR2(20),
    rank_tin                       INTEGER,
    rank_st                        INTEGER,
    rank_hearing                   INTEGER,
    ptn_decision                   VARCHAR2(20),
    next_visit                     VARCHAR2(20),
    fui_tin_activities_changes     VARCHAR2(1),
    fui_st_activities_changes      VARCHAR2(1),
    fui_problem_in_general         VARCHAR2(6),
    fui_glad_started               VARCHAR2(2),
    fui_main_prob_disc             VARCHAR2(100)
);

ALTER TABLE interview ADD CONSTRAINT interview_pk PRIMARY KEY ( id );

CREATE TABLE patient (
    thc          VARCHAR2(9) NOT NULL,
    ssn          VARCHAR2(11) NOT NULL,
    dob          DATE NOT NULL,
    first_name   VARCHAR2(10) NOT NULL,
    last_name    VARCHAR2(10) NOT NULL,
    phone        VARCHAR2(12) NOT NULL,
    email        VARCHAR2(30) NOT NULL,
    insurance    VARCHAR2(20) NOT NULL
);

ALTER TABLE patient ADD CONSTRAINT patient_pk PRIMARY KEY ( thc );

CREATE TABLE visit (
    visit_id               INTEGER NOT NULL,
    visit_number           SMALLINT NOT NULL,
    "Date"                 DATE NOT NULL,
    patient_thc            VARCHAR2(9) NOT NULL,
    clinic_clinic_number   INTEGER NOT NULL,
    interview_id           INTEGER NOT NULL
);

ALTER TABLE visit ADD CONSTRAINT visit_pk PRIMARY KEY ( visit_id );

ALTER TABLE visit
    ADD CONSTRAINT visit_clinic_fk FOREIGN KEY ( clinic_clinic_number )
        REFERENCES clinic ( clinic_number );

ALTER TABLE visit
    ADD CONSTRAINT visit_interview_fk FOREIGN KEY ( interview_id )
        REFERENCES interview ( id );

ALTER TABLE visit
    ADD CONSTRAINT visit_patient_fk FOREIGN KEY ( patient_thc )
        REFERENCES patient ( thc );



-- Oracle SQL Developer Data Modeler Summary Report: 
-- 
-- CREATE TABLE                             4
-- CREATE INDEX                             0
-- ALTER TABLE                              7
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0