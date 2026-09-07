import { Link } from "react-router";

const NoteCard = ({ note }) => {
  return <Link to={`/notes/${note._id}`}>NoteCard </Link>;

};

export default NoteCard;
