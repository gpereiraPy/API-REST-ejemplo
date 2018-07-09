var mongoose    = require("mongoose"),  
    Schema      = mongoose.Schema;
    
var personaSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    
});


module.exports = mongoose.model("Persona", personaSchema);