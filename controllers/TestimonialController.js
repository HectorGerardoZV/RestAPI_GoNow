import Testimonials from "../models/Testimonials.js";

const addTestimonial = async(req,res,next)=>{
    const testimonial = new Testimonials(req.body);
    try {
        await testimonial.save();
        res.json({message: "The testimonial was added"});
    } catch (error) {
        console.log(error);
        next();
    }
}
const findTestimonial = async(req,res,next)=>{
    const id = req.params.id;
    try {
        const testimonial = await Testimonials.findById(id);
        res.json(testimonial);
    } catch (error) {
        console.log(error);
        next();
    }
}
const findAllTestimonials = async(req,res,next)=>{
    try {
        const testimonials = await Testimonials.find();
        res.json(testimonials);
    } catch (error) {
        console.log(error);
        next();
    }
}
const updateTestimonial = async(req,res,next)=>{
    const id = req.params.id;
    const updateTestimonial = req.body;

    try {
        const newTestimonial = await Testimonials.findOneAndUpdate({_id: id},updateTestimonial, {new:true});
        res.json(newTestimonial);
    } catch (error) {
        console.log(error);
        next();
    }
    
}
const deleteTestimonial = async(req,res,next)=>{
    const id = req.params.id;
    try {
        await Testimonials.findOneAndDelete({_id: id});
        res.json({message: "The testimonial was deleted"});
    } catch (error) {
        console.log(error);
        next();
    }
}


export{addTestimonial,findTestimonial,findAllTestimonials,updateTestimonial,deleteTestimonial};