import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	const notes = await req.context.models.Note.findAll();
	return res.send(notes);
  });
  
  router.get('/:noteId', async (req, res) => {
	const note = await req.context.models.Note.findByPk(
	  req.params.noteId,
	);
	return res.send(note);
  });
  
  router.post('/', async (req, res) => {
	const note = await req.context.models.create({
	  text: req.body.text,
	  userId: req.context.me.id,
	});
  
	return res.send(note);
  });
  
  router.delete('/:noteId', async (req, res) => {
	const result = await req.context.models.Note.destroy({
	  where: { id: req.params.noteId },
	});
  
	return res.send(true);
  });
  
  

export default router;