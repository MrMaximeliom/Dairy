import { Router } from 'express';
import {db} from '../models'

const router = Router();
// endpoint to get all notes
router.get('/', async (req, res) => {
	const notes = await db.note.findAll();
	return res.send(notes);
  });
//   endpoint to get a single note by its note id
  router.get('/:noteId', async (req, res) => {
	const note = await db.note.findByPk(
	  req.params.noteId,
	);
	if(note){
		return res.send(note)

	}
	else{
		return res.send(`Note with id:${req.params.noteId} is not found`)


	}
  });
//   endpoint to create new notes 
  router.post('/', async (req, res) => {
	const note = await db.note.create({
	  text: req.body.text,
	
	});
	if(note){
		return res.send({message:"note created successfully",note:note})
	}
	else{
		return res.send("failed to create new note")
	}
  
  });
//   endpoint to update a note using its id
router.put('/:noteId', async (req, res) => {
	const note = await db.note.findByPk(
	  req.params.userId,
	);
  if(note){
    const flag = await note.update({
		text: req.body.text,
		
  }, { where: { id: req.params.noteId } })
  await flag.save()
  if(flag){
    return res.send({message:"Updated Successfully!",note:flag});
      
  }
  else{

      return res.send(`failed to update!${flag.text}`);
  }

  }
  else{
    return res.send(`Note with id:${req.params.noteId} is not found`)
  }
 
    
	
  });
//   endpoint to delete a note using its id
  router.delete('/:noteId', async (req, res) => {
	const result = await db.note.destroy({
	  where: { id: req.params.noteId },
	});
	if(result){
     await result.destroy()
	 return res.send("note deleted sucessfully")
	}
	else{
		return res.send(`note with id:${req.params.noteId} was not found!`)

	}
  
	return res.send(true);
  });
  
  

export default router;