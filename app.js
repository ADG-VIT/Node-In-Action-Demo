const express = require('express');
const ejs = require('ejs');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

/*let collection;
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

try {
    client.connect(async err => {
        if (err) {
            console.log(err);
        } else {
            collection = await client.db().collection();
        }
    });
} catch (e) {
    console.log(e);
}*/

let notesList = []

app.get("/", async (req, res) => {
    //if (collection !== undefined)
    //    let notesList = await collection.find({}).toArray();
    res.render('home', {notes : notesList});
});

app.get("/new", (req, res) => {
    res.sendFile(__dirname + "/new-note.html");
});

app.post("/new", (req, res) => {
    const data = req.body;
    const note = {title: data.title, msg: data.message};
    notesList.push(note);
    //if (collection !== undefined)
    //    response = await collection.insertOne(note);
          
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});