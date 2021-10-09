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
    deleteTestimonial} from "../controllers/TestimonialController.js";
import {
    addTravel,
    findTravel,
    findAllTravels,
    updateTravel,
    deleteTravel} from "../controllers/TravelsController.js";

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
//Travels routes
router.post("/travels",addTravel);
router.get("/travels",findAllTravels);
router.get("/travels/:id",findTravel);
router.put("/travels/:id",updateTravel);
router.delete("/travels/:id",deleteTravel);


export default router;


