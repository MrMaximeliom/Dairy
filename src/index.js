import 'dotenv/config';
import  express  from "express"
import routes from '../routes';
import cors from 'cors'
import models, { sequelize } from '../models';
const app = express()
// express middlewares
app.use((req, res, next) => {
    req.context = {
      models,
    //   me: models.users[1],
    };
    next();
  });
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',routes.user)

sequelize.sync().then(() => {
app.listen(process.env.PORT,()=>{
    console.log(`server now is running on port:${process.env.PORT}`)
})
})