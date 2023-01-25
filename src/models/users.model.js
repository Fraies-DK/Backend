import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserShema = new Schema({
    user: {
        type: String, 
        require: true, 
        max: 100
    },
    pass: {
        type: String, 
        require: true.valueOf, 
        max: 128
    }
});

export default mongoose.model("users", UserShema);