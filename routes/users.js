import { Router } from 'express';
import db from '../models'
const { authJwt } = require("../middleware");

const router = Router();
// endpoint to get all users
router.get('/', [authJwt.verifyToken], async (req, res) => {
	const users = await db.user.findAll();
	return res.send(users);
	
  });
// endpoint to create new users
router.post('/', async (req, res) => {
	const user = await db.user.create({
	  
	  username: req.body.username,
	  first_name: req.body.first_name,
	  last_name: req.body.last_name,
	  password: req.body.password,
	  email: req.body.email,
	 
	});
  
	return res.send(user);
  });
//   endpoint to get single user by its id
router.get('/:userId', async (req, res) => {
	const user = await db.user.findByPk(
	  req.params.userId,
	);
	if(user){
		return res.send(user);

	}
	else{
		return res.send(`User with id:${req.params.userId} is not found`)
	}
  });
//   endpoint to get single user by its id
router.put('/:userId', async (req, res) => {
	const user = await db.user.findByPk(
	  req.params.userId,
	);
  if(user){
    const flag = await user.update({
		username: req.body.username,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		password: req.body.password,
		email: req.body.email,
  }, { where: { id: req.params.userId } })
  await flag.save()
  if(flag){
    return res.send({message:"Updated Successfully!",user:flag});
      
  }
  else{

      return res.send(`failed to update!${flag.username}`);
  }

  }
  else{
    return res.send(`User with id:${req.params.userId} is not found`)
  }
 
    
	
  });
  //   endpoint to delete a user by its id
router.delete('/:userId', async (req, res) => {
	const user = await db.user.findByPk(
	  req.params.userId,
	);
	if(user){
		await user.destroy()
		return res.send("user deleted successfully")

	}
	else{
		return res.send(`User with id:${req.params.userId} is not found!`);
	}
	
  });
  

export default router;


