"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let ActorSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    heroName: {
        type: String,
        required: true
    }
});

mongoose.model("Actor", MovieDetailsSchema);
let Actor = mongoose.model("Actor");
module.exports = Actor;