const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next)=>{
    const bearer = req.headers["authorization"]
    if(bearer === undefined){
        return res.send({msg:"no token"})
    }
    const token = bearer.split(" ")[1]
    if(token === undefined){
       return  res.send({msg:"user not authorized person"})
    }
    const validate = jwt.verify(token,process.env.secretkey)
    if(validate){
       return next()
    }
    return res.send({msg:"not authorized "})
}

module.exports = authMiddleware;