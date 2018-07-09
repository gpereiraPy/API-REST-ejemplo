var mongoose    = require("mongoose"),
    app         = require("./app"),
    config      = require("./config")


app.listen(config.port,  function(){
    mongoose.connect(config.db, function(err, res){
        if(err){
        console.log("ERROR.NO hay conexion a la Base de Datos.");
        }else {
        console.log("Conexion a la base de datos establecida");
        console.log("API REST corriendo"); 
        }
    }); 
   
});