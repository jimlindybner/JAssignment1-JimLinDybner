//import required modules
const express = require("express"); const path = require("path");

//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

//MongoDB stuff
const { MongoClient } = require("mongodb");
const dbUrl = "mongodb://localhost:27017/testdb"; //default port is 27017
// const dbUrl = "mongodb+srv://<username>:<password>@cluster0.9s8pywv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(dbUrl);

//set up Express app to use Pug as the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//set up public folder path for static files
app.use(express.static(path.join(__dirname, "public")));

//rendering specific views/pages
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
    res.render("about", {title: "About"});
});

app.get("/collection", (req, res) => {
    res.render("collection", {title: "Collection"});
});

//set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});