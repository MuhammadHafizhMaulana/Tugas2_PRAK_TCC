import express from "express";
import { createNote, deleteNote, getNote, updateNote } from "../controller/noteController.js";

const router = express.Router();

router.get("/notes", getNote);
router.post("/add-note", createNote);
router.put("/edit-note/:id", updateNote);
router.delete("/delete-note/:id", deleteNote);

export default router;
