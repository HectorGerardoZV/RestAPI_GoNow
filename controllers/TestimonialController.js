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


export{
    addTestimonial
}