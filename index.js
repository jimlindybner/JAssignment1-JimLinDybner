//import required modules
const express = require("express"); const path = require("path");
const dotenv = require("dotenv");

dotenv.config(); //load our custom enironment variables


//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

//MongoDB stuff
const { MongoClient } = require("mongodb");
const { get } = require("express/lib/response");
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;
const client = new MongoClient(dbUrl);

//set up Express app to use Pug as the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//set up public folder path for static files
app.use(express.static(path.join(__dirname, "public")));

//rendering specific views/pages
app.get("/", async (req, res) => {
    let links = await getLinks();
    res.render("index", { title: "Home", menu: links });
});

app.get("/about", async (req, res) => {
    let links = await getLinks();
    res.render("about", {title: "About", menu: links });
});

app.get("/collection", async (req, res) => {
    let links = await getLinks();
    let collectionImg = await getCollectionImg();
    res.render("collection", {
        title: "Collection",
        menu: links,
        img: collectionImg
    });
});

//set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

//MONGO HELPER FUNCTIONS
async function connection() {
    await client.connect();
    db = client.db("testdb"); return db;
}

async function getLinks() {
    db = await connection();
    var results = db.collection("menuLinks").find({});
    res = await results.toArray();
    return res;
}

async function getCollectionImg() {
    var results = db.collection("collectionImg").find({});
    res = await results.toArray();
    return res;
}