const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description :{
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const movieModel = mongoose.model('omprakash_movie', movieSchema);

module.exports = { movieModel }