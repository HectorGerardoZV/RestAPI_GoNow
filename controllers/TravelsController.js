import Travels from "../models/Travels.js";
const addTravel = async(req,res,next)=>{
    const travel = new Travels(req.body);
    try {
       await travel.save();
       res.json({ message: "Well, The travel was added" });
    } catch (error) {
        console.log(error);
        next();
    }
}
const findTravel = async(req,res, next)=>{
    const id = req.params.id;
    try {
        const travel = await Travels.findById(id);
        res.json(travel);
    } catch (error) {
        console.log(error);
        next();
    }
}
const findAllTravels = async(req,res, next)=>{
    try {
        const travels =await Travels.find();
        res.json(travels);
    } catch (error) {
        console.log(error);
        next();
    }
}
const updateTravel = async(req,res, next)=>{
    const id = req.params.id;
    const updateTravel = req.body;
   try {
       const travel = await Travels.findOneAndUpdate({_id: id}, updateTravel,{new: true});
       res.json(travel);
   } catch (error) {
       console.log(error);
       next();
   }
}
const deleteTravel = async(req,res, next)=>{
   const id = req.params.id;

    try {
     await Travels.findOneAndDelete({_id: id});
     res.json({message: "The travel were deleted successfuly"});
   } catch (error) {
       console.log(error);
       next();
   }
}

export{addTravel,findTravel,findAllTravels,updateTravel,deleteTravel}