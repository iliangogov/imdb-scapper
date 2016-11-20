/* globals console require setTimeout Promise */
"use strict";

const constants = require("./config/constants");
const controller = require("./controllers");

require("./config/mongoose")(constants.connectionString);

// controller.proceedSimpleMovies();

controller.proceedMoviesDetails();

controller.proceedActors();