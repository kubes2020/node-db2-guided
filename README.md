# DB II Guided Project

Guided project **DB II** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- a REST client alike [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.
- create a free account for [DB Designer](https://dbdesigner.net).

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor explores schema design with this API.

**_ STEPS _**
Connect knex to ./data/produce.db3 dababase file

- npm i -g knex
- knex init -> creates the knexfile.js
- modify the development configuration to point to './data/produce.db3'
- remove knex code at top of 'fruites-router.js'
- create a 'connection.js' file that uses 'knexfile.js' to pick the 'development' configuration object.
- use the 'connection' file inside 'fruits-router' (call it 'db') as the means to access the database.
- run the server and do a GET to 'localhost:5000/api/fruits'

** MANTRAS **

- every table MUST have a Primary Key.
- every change to the database schema (structure) NEEDS a new migration

**Migrations**

- create a migration: 'knex migrate:make <migration_name>
- run all pending migrations: 'knex migrate:latest'
