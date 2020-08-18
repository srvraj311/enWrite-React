import React from "react";
import "../css/style.css";

const GetNotes = (props) => {
  const Notesarr = [...props.JSONnotes];
  Notesarr.sort().reverse();
  const NotesList = Notesarr.map((item) => {
    function div() {
      return (
        <div key={id_num} className="cardSmall">
          <div className="noteName">
            {title}
            <i
              onClick={(event) => props.deleteMe(id_num, title, my_notes)}
              className="fas fa-trash"
            ></i>
            <i
              onClick={(event) => props.editNote(id_num, title, my_notes)}
              className="fas fa-edit"
            ></i>
          </div>

          <div className="savedNotes" id="style-10">
            {my_notes}
          </div>
        </div>
      );
    }
    var id_num = item.id;
    var title = item.title;
    var my_notes = item.note;
    var searchText = props.searchText.toLowerCase();
    if (searchText === "") {
      // If Searc Box is empty

      return div();
    } else if (searchText !== "") {
      // if searchbox is not empty
      //then if title contains search text or note contains search text then
      if (
        title.toLowerCase().indexOf(searchText) !== -1 ||
        my_notes.toLowerCase().indexOf(searchText) !== -1
      ) {
        return div();
      }
    }
  });

  return <div className="container">{NotesList}</div>;
};

export default GetNotes;
