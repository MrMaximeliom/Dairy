import 'dotenv/config';
import  express  from "express"
import routes from '../routes';
import cors from 'cors'
import db from '../models';
const app = express()
// express middlewares
// app.use((req, res, next) => {
//     req.context = {
//       models,
//     };
//     next();
//   });
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',routes.user)
app.get("/",(request,response)=>{
  response.send("Hello to REST API")
}
)
db.sequelize.sync().then(() => {
app.listen(process.env.PORT,()=>{
    console.log(`server now is ruing on port:${process.env.PORT}`)
})
})