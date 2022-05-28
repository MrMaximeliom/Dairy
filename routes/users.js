import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = Router();

router.get('/', async (req, res) => {
	const users = await req.context.models.User.findAll();
	return res.send(users);
	
  });
router.post('/', async (req, res) => {
	const user = await req.context.models.User.create({
	  
	  username: req.body.username,
	 
	});
  
	return res.send(user);
  });
  
router.get('/:userId', async (req, res) => {
	const user = await req.context.models.User.findByPk(
	  req.params.userId,
	);
	return res.send(user);
  });
  
  

export default router;


