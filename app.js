const express = require('express');
const ejs = require('ejs');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (res) => {
    res.render('home', {notes : notesList});
});

app.get("/new", (res) => {
    res.sendFile(__dirname + "/new-note.html");
});

app.post("/new", (req, res) => {
    res.redirect("/");
});

app.get("/note", (res) => {
    res.render('notes');
});

app.post("/note", (req, res) => {
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});