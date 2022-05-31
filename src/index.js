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
require('../routes/auth.routes')(app);
const Role = db.role
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
db.sequelize.sync().then(() => {
app.listen(process.env.PORT,()=>{
    console.log(`server now is ruing on port:${process.env.PORT}`)
})
})