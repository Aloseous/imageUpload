import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { connectDB } from './config/db.js';
import path from 'path'
import { fileURLToPath } from 'url';
import ImageRouter from './routes/imageRouter.js'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
app.use(cors())
connectDB()

const port = process.env.PORT || 5627
app.use(express.json({
    limit: "30mb",
    extended: true
}));
app.use(express.urlencoded({
    limit: "30mb",
    extended: true
}));

app.use('/api', ImageRouter)

if(process.env.NODE_ENV === 'production'){
    console.log('called inside --d>',__dirname)
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
        console.log('called inside 2 -->',__dirname)
        res.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
    })
}

app.listen(port, () => console.log(`server running on port ${port}`))



