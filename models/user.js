var mongoose    = require("mongoose"),
    Schema      = mongoose.Schema,
    bcrypt      = require("bcrypt-nodejs");
    
var UserSchema  = new Schema({
    email:{ type: String, unique: true, lowercase: true},
    displayName: String,
    password: {type: String, select: false}, //no se envia al hacer GET
    signupDate: {type: Date, default: Date.now()},
    lastLogin: Date
});

UserSchema.pre("save", function(next){
    var user = this;
    if(!user.isModified("password")){
        return next();
    }else {
        bcrypt.genSalt(10, function(err, salt){
            if(err){
                return next();
            }else{
                bcrypt.hash(user.password, salt, null, function(err,hash){
                    if(err){
                        return next(err);
                    }else{
                        user.password= hash;
                        next();
                    }
                });
            }
        });
    }
});

module.exports= mongoose.model("User", UserSchema);