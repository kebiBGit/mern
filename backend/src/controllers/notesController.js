export function getAllNotes(req, res) {
  res.status(200).send("Your just fetched the notes!");
}

export function createNote(req, res) {
  res.status(201).json({ message: "Note creater successfully!" });
}

export function updateNote(req, res) {
  res.status(200).json("Post updated successfully!");
}

export function deleteNote(req, res) {
  res.status(200).json("Note deleted successfully!");
}
