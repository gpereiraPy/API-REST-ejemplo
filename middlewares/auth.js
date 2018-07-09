'use strict'
var services  = require("../services")
    
function isAuth(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send({message: "No tienes autorizacion. Registrate o Logueate para acceder"});
    }else{
        var token= req.headers.authorization.split(" ")[1];
        
        services.decodeToken(token)
            .then(response => {
                req.user= response
                next()
            })
            
            .catch(response => {
                res.status(response.status)
            })
    }
    
}

module.exports= isAuth
