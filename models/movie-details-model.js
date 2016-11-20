/* globals require module */
"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let MovieDetailsSchema = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    trailerUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    dateRelease: {
        type: String,
        required: true
    },
    actors: {
        type: [String],
        required: true
    }
});

mongoose.model("MovieDetails", MovieDetailsSchema);
let MovieDetails = mongoose.model("MovieDetails");
module.exports = MovieDetails;