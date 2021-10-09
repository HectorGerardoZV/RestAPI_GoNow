import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TestimonialsSchema = new Schema({
    idCreator: {
        type: String,
        trim: true
    },
    likes: [String],
    description: {
        type: String,
        trim: true
    }
});



export default mongoose.model("Tetimonials",TestimonialsSchema);