import Note from "../models/notes.js";

// GET (Ngambil Data)
async function getNote(req, res) {
  try {
    const result = await Note.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
}

// POST
async function createNote(req,res) {
  try {
    const inputResult = req.body;
    const newNote = await Note.create(inputResult);
    res.status(201).json(newNote); 
  }catch(error){
    console.log(error.message);

  }
}

// PUT/PATCH
async function updateNote(req, res) {
  try {
    const {id} = req.params;
    const updateInput = req.body;
    const note = await Note.findByPk(id);

    if(!note){
      return res.status(404).json({message:"Note not found"})
    }

    await Note.update(updateInput, {where: {id} });
    res.status(200).json({message:"Note update succesfully"})

  } catch (error) {
    console.log(error.message);
  }
  
}

// DELETE
async function deleteNote(req, res) {
  try {
    const {id} = req.params;
    const note = await Note.findByPk(id);

    if(!note){
      return res.status(404).json({message:"Note not found"})
    }

    await Note.destroy({where: {id}})
    res.status(200).json({message:"Note delete succeesfuly"})
    
  } catch (error) {
    console.log(error.message);
  }
  
}

export { getNote, createNote, updateNote, deleteNote };
