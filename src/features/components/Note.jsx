import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addNote } from "../reducers/notesSlice";
import { allNotes } from "../reducers/notesSlice";
import BackArrow from "../images/arrow_back_black_48dp.svg";
import saveIcon from "../images/save_black_48dp.svg";

const Note = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const notes = useSelector(allNotes);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSave = (e) => {
    e.preventDefault();
    if (title == "" && content == "") {
      history.push("/Notes-PWA");
      return;
    }
    dispatch(addNote(title, content));
    localStorage.setItem("Notes", JSON.stringify(notes));
    history.push("/Notes-PWA");
  };

  return (
    <div className="Note">
      <form>
        <label htmlFor="title"></label>
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
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </form>
      <img onClick={handleSave} className="backButton" src={BackArrow} />
    </div>
  );
};

export default Note;
