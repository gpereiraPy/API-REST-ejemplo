var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    api         = require("./routes")
    
    
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/api",api);


module.exports = app;