CREATE SEQUENCE sequence_role start with 1 increment BY 1 minvalue 1 maxvalue 100;
CREATE TABLE user_role (
  role_id numeric NOT NULL DEFAULT nextval('sequence_role'),
  role_name varchar NOT NULL CONSTRAINT unq_role_name UNIQUE,
  role_created_at date NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT pk_role_id PRIMARY KEY (role_id)
);
CREATE SEQUENCE sequence_user start with 1 increment BY 1 minvalue 1 maxvalue 200000;
CREATE TABLE regist_user (
  user_id numeric NOT NULL DEFAULT nextval('sequence_user'),
  user_name varchar NOT NULL CONSTRAINT unq_user_name UNIQUE,
  user_password varchar NOT NULL,
  user_fk_role numeric NOT NULL DEFAULT 10,
  user_created_at date NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT pk_user_id PRIMARY KEY (user_id),
  CONSTRAINT fk_user_fk_role FOREIGN KEY (user_fk_role) REFERENCES user_role(role_id)
);