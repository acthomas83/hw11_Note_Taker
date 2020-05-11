const router = require("express").Router();
let database = require("../db/db.json");
const fs = require("fs");


router.get("/api/notes", function(req, res) {
    res.json(database);
});

router.post("/api/notes", function(req, res){
    let newNote = req.body;

    //give the new note a unique id;

    database.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(database,0,2))
    res.json(newNote);
});

router.delete("/api/notes/:id", function(req, res){
    let id = req.params.id;

    database.push(newNote); //find and delete
    //.splice or .filter

    fs.writeFileSync("./db/db.json", JSON.stringify(database,0,2))
    res.json(database);
})

module.exports = router;