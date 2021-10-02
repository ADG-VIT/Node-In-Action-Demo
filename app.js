const express = require('express');
const ejs = require('ejs');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

let collection;
const uri = process.env.MONGODB_STRING;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
    try {
        client.connect(async err => {
            if (err) {
                console.log(err);
            } else {
                collection = await client.db("CodeNode").collection("Notes");
                var notesList = await collection.find({}).toArray();
                res.render('home', {notes : notesList});
            }
        });
    } catch (e) {
        console.log(e);
    }
});

app.get("/new", (req, res) => {
    res.sendFile(__dirname + "/new-note.html");
});

app.post("/new", async (req, res) => {
    const data = req.body;
    const note = {title: data.title, msg: data.message};

    try {
        client.connect(async err => {
            if (err) {
                console.log(err);
            } else {
                collection = await client.db("CodeNode").collection("Notes");
                var response = await collection.insertOne(note);
                if (response.acknowledged)
                    res.redirect("/");
            }
        });
    } catch (e) {
        console.log(e);
    }       
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});