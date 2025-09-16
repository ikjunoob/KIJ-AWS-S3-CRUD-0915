import "dotenv/config";
import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import filesRouter from './routes/files.js'

const PORT = process.env.PORT
await mongoose.connect(process.env.MONGO_URI)
const app = express()

app.use(cors({
    origin: process.env.FRONT_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use('/api/files', filesRouter)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})

router.get('/',async(req,res)=>{
    try {
        
        const items =await FileItem.find().sort({createdAt:-1}).lean()

        const out = await Promise.all(
            items.map(async(it)=>({
                ...it,
                url:await presignGet(it.key,300)
            }))
        )

        res.status(201).json({message:"S3 메타데이터 가져오기",out})
        
    } catch (error) {
        console.error('메타데이터 저장 에러',error)
        res.status(500).json({error:"S3 메타데이터 저장 실패"})
    }
})
