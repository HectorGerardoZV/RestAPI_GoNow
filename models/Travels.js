import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TravelsSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    stars: {
        type: Number
    },
    departureDate: {
        type: String,
        trim: true
    },
    returnDate: {
        type: String,
        trim: true
    }
});



export default mongoose.model("Travels",TravelsSchema);