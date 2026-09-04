import Note from "../models/Note.js";

export async function fetchNoteById(req, res) {
  try {
    const fetchedNote = await Note.findById(req.params.id);
    if (!fetchedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(fetchedNote);
  } catch (error) {
    console.error("Error in fetchNoteById controller", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find(req.parmas.id);
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
    console.log(title, content);
  } catch (error) {
    console.error("error in createnote controller", error);
    res.status(500).json({ message: "internal server error!" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      {
        new: true,
      },
    );

    if (!updatedNote) return res.status(404).json(updatedNote);
    res.status(200).json({ message: "Note updated successfully!" });
  } catch (error) {
    console.error("error in updateNote controller", error);
    res.status(500).json({ message: "internal server error!" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error!" });
  }
}
