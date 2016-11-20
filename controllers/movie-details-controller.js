const htmlParser = require("../utils/html-parser");
const modelsFactory = require("../models");
const timeDelay = require("../utils/time-delay");
const httpRequester = require("../utils/http-requester");
const urlParser = require("../utils/url-parser");
const constants = require("../config/constants");

let moviesUrls = [];
let moviesArr = [];

function getMovieDetails(url) {
    httpRequester.get(url)
        .then(page => {
            const html = page.body;
            return htmlParser.parseMovieDetails(html);
        })
        .then(movieDetails => {
            moviesArr.push(movieDetails);

            if (moviesArr.length === 20) {
                let moviesToInsert = moviesArr.splice(0);

                modelsFactory.insertManyMoviesDetails(moviesToInsert);
            }
            modelsFactory.insertMoviesDetails(movieDetails);
            return timeDelay(constants.milliSeconds);
        })
        .then(() => {
            if (moviesUrls.length === 0) {
                modelsFactory.insertMoviesDetails(moviesArr);
                return;
            }

            getMovieDetails(moviesUrls.pop());
        })
        .catch(err => console.log(err));
}

function run() {
    modelsFactory.getMoviesIds()
        .then(ids => {
            ids.forEach(id => {
                let url = urlParser.generateUrlBuId(id.imdbId);
                moviesUrls.push(url);
            });
        })
        .then(() => {
            Array.from({ length: constants.moviesPagesCount })
                .forEach(() => getMovieDetails(moviesUrls.pop()));
        });
}

module.exports.run = run;