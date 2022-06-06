import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { allNotes, addNote, deleteNote } from "../reducers/notesSlice";
import { useState } from "react";
import BackArrow from "../images/arrow_back_black_48dp.svg";

const EditNote = () => {
  const { id } = useParams();
  const notes = useSelector(allNotes);
  let note;
  notes.forEach((noteItem) => {
    if (noteItem.id === id) {
      note = noteItem;
      console.log(note);
    }
  });

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSave = (e) => {
    // e.preventDefault();
    dispatch(deleteNote(id));
    dispatch(addNote(title, content));
    localStorage.setItem("Notes", JSON.stringify(notes));
    history.push("/NotePad");
  };
  return (
    <div className="Note">
      <form>
        <label htmlFor={title}></label>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content"></label>
        <textarea
          value={content}
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
      <br />
      <img onClick={handleSave} className="backButton" src={BackArrow} />
    </div>
  );
};

export default EditNote;
