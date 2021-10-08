import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    userName: {
        type: String, 
        trim:true
    },
    email: {
        type: String, 
        trim: true
    },
    password: {
        type: String, 
        trim: true
    }
});



export default mongoose.model("Users",UsersSchema);