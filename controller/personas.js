var Persona     = require("../models/personas")

function getPersona(req, res){
        var personaId= req.params.personaId;
        Persona.findById(personaId, function(err, persona){
        if(!persona){
            res.status(404).send({message:"No existe registro"});
        }else if(err){
            res.status(484).send({message:"Error al realizar la peticion"});
        }else{
            res.status(200).send({persona: persona});
        }
    });
}

function createPersona(req, res) {
    console.log("POST /api/personas");
    console.log(req.body);
    
    var persona= new Persona();
    persona.name = req.body.name;
    persona.phone = req.body.phone;
    persona.email = req.body.email;
    
    
    persona.save(persona, function(err, personaIngresada){
        if(err){
            res.status(500).send({message:"Error al grabar en la Base de Datos: "+err})
            
        }else{
            res.status(200).send({persona: personaIngresada});
            
            
        }
    });
}

function getPersonas(req, res){
    Persona.find({}, function(err, personas){
        if(err){
            res.status(500).send({message:"Error al realizar la peticion"});
        }else{
            res.status(200).send({personas});
        }
    });
}


function updatePersona(req, res){
    var personaId= req.params.personaId;
    var update = req.body;
    
    Persona.findByIdAndUpdate(personaId, update,function(err, persona){
        if(!persona){
            res.status(404).send({message:"No existe registro"})
        }else if(err){
            res.status(500).send({message:"Error al Actualizar persona"})
        }else{
            res.status(200).send({persona: persona});
        }
    });
}


function deletePersona(req, res){
    var personaId = req.params.personaId;
    Persona.findById(personaId, function(err, persona){
        if(!persona){
            res.status(404).send({message:"No existe registro"})
        }else if(err){
            res.status(500).send({message:"Error al realizar peticion"+err})
        }else{
            persona.remove(function(err){
                if(err){
                    res.status(500).send({message:"Error al Borrar persona"});
                }else{
                    res.status(200).send({message:"Se ha eliminado la persona"});
                }
            })
        }
    });
}

module.exports ={
    getPersona,
    getPersonas,
    updatePersona,
    deletePersona,
    createPersona
}