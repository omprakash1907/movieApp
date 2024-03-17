const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://omprakashkjat19:Mp6RjeJoLEx9SvC3@test.fkf1bxq.mongodb.net/myMoviedb')
.then(() => console.log('Connected!'));
const app = express()
const multer  = require('multer')
const fs = require('fs');
const { error } = require('console');
const { movieModel } = require('./schema');

app.set('view engine', 'ejs');
app.use(express.static('upload'));
app.use(express.static('public'));

//-----------------multer
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        return cb(null, './upload')
    },
    filename :function(req,file,cb){
        return cb(null, file.originalname)
        console.log(file)
    }
})

const upload = multer({ storage: storage }).single('file')

app.get('/', function(req,res){
    res.render('./Pages/home')
})

app.get('/upload', function(req,res){
    res.render('./Pages/index')
})

app.post('/upload', function (req, res) {
    console.log(req.body)
    upload(req, res, async function (err) {
        if (err) {
            console.log(err);
            return res.status(500).send('Error uploading file.');
        }

        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const details = {
            name: req.body.name,
            description: req.body.description,
            year: req.body.year,
            genre: req.body.genre,
            rating: req.body.rating,
            file: req.file.originalname
        };

        try {
            const profile = await movieModel(details);
            const result = await profile.save();
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error saving movie details.');
        }
    });
});
app.get('/list', async function(req,res){
    const movies = await movieModel.find({})
    res.render('./Pages/watchlist', {movies : movies})
})

app.listen((3000), () =>{
    console.log('Server Started : 3000')
})