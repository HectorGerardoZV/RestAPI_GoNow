import express from "express";
import {addUser,findUser,findAllUsers,updateUser,deleteUser} from "../controllers/UsersController.js";
const router = express.Router();

//Users routes
router.post("/users",addUser);
router.get("/users",findAllUsers);
router.get("/users/:id",findUser);
router.put("/users/:id",updateUser);
router.delete("/users/:id",deleteUser);


export default router;


