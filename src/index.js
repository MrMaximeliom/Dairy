import 'dotenv/config';
import  express  from "express"
import cors from 'cors'
const app = express()
app.use(cors())
app.listen(process.env.PORT,()=>{
    console.log(`server now is running on port:${process.env.PORT}`)
})