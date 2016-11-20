/* globals require module */
"use strict";

const constants = require("../config/constants");
const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let DetailedMovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String
    },
    coverImage: {
        type: String
    },
    trailer: {
        type: String
    },
    description: {
        type: String
    },
    genres: [{
        type: String
    }],
    cast: [{
        name: String,
        role: String,
        photoUrl: String,
        imdbId: String
    }]
});

let MovieDetails;
DetailedMovieSchema.statics.getDetailedMovie =
    function(movie) {
        return new MovieDetails({
            title: movie.title,
            releaseDate: movie.releaseDate,
            coverImage: movie.coverImage,
            trailer: movie.trailer,
            description: movie.description,
            genres: movie.genres,
            cast: movie.cast
        });
    };

let modelName = constants.detailedMovieModelName;
mongoose.model(modelName, DetailedMovieSchema);
MovieDetails = mongoose.model(modelName);
module.exports = MovieDetails;