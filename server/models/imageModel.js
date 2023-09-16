import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    myFile :String    
})

const ImageModel = mongoose.model('images', imageSchema)

export default ImageModel;