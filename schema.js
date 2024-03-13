const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
.then(() => console.log('Connected!'));

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    image: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    releasedate: {
        type: Date,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
}, {timestamps : true})

const ProductModel = mongoose.model('Omprakash_movie',ProductSchema)

module.exports = { ProductModel }

