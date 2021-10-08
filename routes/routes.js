import express from "express";
import {addUser} from "../controllers/UsersController.js";
const router = express.Router();

//Users routes
router.post("/users",addUser);


export default router;


