import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'; 
import Zoom from '@material-ui/core/Zoom'; 

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const[showText, setText] = useState(false); 

  function handleTitleClick() {
    setText(true); 
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          onClick={handleTitleClick}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {showText && 
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={showText ? 3 : 1}
        />
        }
        {showText &&
          <Zoom in={true}>
            <Fab onClick={submitNote}><AddIcon/></Fab>
          </Zoom>
        }
      </form>
    </div>
  );
}

export default CreateArea;