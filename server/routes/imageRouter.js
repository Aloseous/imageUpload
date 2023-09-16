import express from 'express';
import {uploadImage, getAllImage} from '../controller/imageCtrl.js'

const router = express.Router()

router.post('/upload', uploadImage)
router.get('/', getAllImage)

export default router;