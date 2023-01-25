import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const DesignsSchema = new Schema({
    design_id:{
        type: String, 
        require: true, 
        max:60
    },
    nombre:{
        type: String, 
        required: true, 
        max:60
    },
    descripcion:{
        type: String, 
        required: false, 
        max:150
    },
    urlimg:{
        type: String, 
        require: true
    }
});

export default mongoose.model('designs', DesignsSchema);