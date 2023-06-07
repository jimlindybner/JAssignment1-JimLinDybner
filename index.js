//import required modules
const express = require("express"); const path = require("path");

//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

//set up Express app to use Pug as the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

//set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});