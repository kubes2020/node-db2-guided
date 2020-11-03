const knex = require('knex');

const knexfile = require("../knexfile.js");

const knexConfig = knexfile.development; //pick the config you want from knexfile.js

module.exports = knex(knexConfig) //pass the config so wherever it is imported it has config