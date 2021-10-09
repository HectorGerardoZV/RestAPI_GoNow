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
const findUser = async(req,res, next)=>{
    const id = req.params.id;
    try {
        const user = await Users.findById(id);
        res.json(user);
    } catch (error) {
        console.log(error);
        next();
    }
}
const findAllUsers = async(req,res, next)=>{
    try {
        const users =await Users.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        next();
    }
}
const updateUser = async(req,res, next)=>{
    const id = req.params.id;
    const updateUser = req.body;
   try {
       const user = await Users.findOneAndUpdate({_id: id}, updateUser,{new: true});
       res.json(user);
   } catch (error) {
       console.log(error);
       next();
   }
}
const deleteUser = async(req,res, next)=>{
   const id = req.params.id;

    try {
     await Users.findOneAndDelete({_id: id});
     res.json({message: "The client were deleted successfuly"});
   } catch (error) {
       console.log(error);
       next();
   }
}

export{addUser,findUser,findAllUsers,updateUser,deleteUser}