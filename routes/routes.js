import express from "express";
import {
    addUser,
    findUser,
    findAllUsers,
    updateUser,
    deleteUser} from "../controllers/UsersController.js";
import {
    addTestimonial,
    findTestimonial,
    findAllTestimonials,
    updateTestimonial,
    deleteTestimonial} 
from "../controllers/TestimonialController.js";

const router = express.Router();

//Users routes
router.post("/users",addUser);
router.get("/users",findAllUsers);
router.get("/users/:id",findUser);
router.put("/users/:id",updateUser);
router.delete("/users/:id",deleteUser);
//Testimonial routes
router.post("/testimonials",addTestimonial);
router.get("/testimonials",findAllTestimonials);
router.get("/testimonials/:id",findTestimonial);
router.put("/testimonials/:id",updateTestimonial);
router.delete("/testimonials/:id",deleteTestimonial);


export default router;


