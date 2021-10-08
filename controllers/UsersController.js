import Users from "../models/Users.js";
const addUser = async(req,res,next)=>{
    const user = new Users(req.body);
    try {
       await user.save();
       res.json({ message: "Well, The user was added" });
    } catch (error) {
        console.log(error);
        next();
    }
}

export{
    addUser
}