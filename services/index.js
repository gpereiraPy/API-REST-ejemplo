var jwt = require("jwt-simple");
var moment= require("moment");
var config = require("../config")

function createToken(user){
    var payload={
        sub: user._id,
        tkcreated: moment().unix(),
        exp: moment().add(30, "days").unix()
    }
    
    return jwt.encode(payload, config.SECRET_TOKEN);
}

function decodeToken(token){
    var decoded= new Promise(function(resolve, reject){
        try{
            var payload= jwt.decode(token, config.SECRET_TOKEN);
            if(payload.exp <= moment().unix()){
                resolve({
                    status: 401,
                    message: "El token ha expirado"
                });
            }
            
            resolve(payload.sub);
        }catch(err){
            reject({
                status:500,
                message:"Invalid Token"
            });
        }
    });
    
    return decoded;
}

module.exports= {
    createToken,
    decodeToken
}