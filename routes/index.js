var express     = require("express"),
    PersonaCtrl = require("../controller/personas"),
    userCtrl    = require("../controller/user"),
    api         = express.Router(),
    auth        = require("../middlewares/auth"); 
    
    
//INDEX muestra listado de personas
api.get("/personas", PersonaCtrl.getPersonas);

//CREATE agrega personas al grupo
api.post("/personas", auth, PersonaCtrl.createPersona);

//SHOW muestra dato de una persona segun su ID
api.get("/personas/:personaId", auth, PersonaCtrl.getPersona);

//UPDATE actualiza datos de una persona segun su ID
api.put("/personas/:personaId", auth, PersonaCtrl.updatePersona);

//DELETE borra datos de una persona segun su ID
api.delete("/personas/:personaId", auth, PersonaCtrl.deletePersona);

//CREATE user
api.post("/signup", userCtrl.signUp)

//LOGIN user    
api.post("/signin", userCtrl.signIn)


module.exports = api;