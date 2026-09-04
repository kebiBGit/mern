import express from "express";
import {
  fetchNoteById,
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", fetchNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
