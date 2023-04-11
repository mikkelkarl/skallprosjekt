
const express = require ("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index")
});

app.post("/getInfo", (req, res) => {
    const {navn, email, password} = req.body;
    // console.log(req.body)
    console.log(navn)

    if(req.body) {
        res.send("I got the info")
    }
});

app.listen(4000);
