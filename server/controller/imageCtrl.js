import ImageModel from '../models/imageModel.js'

export const uploadImage = async (req, res) => {
    try {
        const newImage = await ImageModel.create(req.body);
        const savedImage =  await newImage.save();
        res.status(201).json(savedImage)
        
    } catch (error) {
        res.status(409).json({message:error.message})
    }

}

export const getAllImage = async(req, res) => {
    try {
        const imageData = await ImageModel.find({})
        res.status(200).json(imageData)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}