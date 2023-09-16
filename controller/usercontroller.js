let arr = [];
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const saltround = 10

const register = (req,res) =>{
    const details = req.body;
    const find = arr.find((item) => details.email === item.email);
    if(find){
        return res.send({msg:"email already register"});
    }
    const generatesalt = bcrypt.genSaltSync(10)
    const hashpassword = bcrypt.hashSync(details.password,saltround)
    const temp = {
        email: details.email,
        password: hashpassword,
    }
    arr.push(temp)
    const token = jwt.sign({eamil:details.email},process.env.secretkey,{expiresIn:"3 days"});
    res.send({msg:"User register",result:temp, token:token})
};

const login = async(req,res) =>{
    const details = req.body;
    const find = arr.find((item) => details.email === item.email);
    if(!find){
        return res.status(200).send({msg:"User not register"})
    }
    const validate = await bcrypt.compare(details.password,find.password)
    if(!validate){
        return res.send({msg:"User password is incorrect"})
    }
    const token = jwt.sign({eamil:details.email},process.env.secretkey,{expiresIn:"36000"});
    res.send({msg:"User is login continue", token:token})
};

module.exports = {register,login}