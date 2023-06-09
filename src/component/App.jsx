import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from '../notes'; 

function App() {

    
    const[noteLst, setLst] = useState([...notes]); 

    function addNote(note) {
        setLst( prev => [...prev, note]); 
    }

    function deleteNote(id) {
        // console.log(id); 
        setLst(prev => {
          return prev.filter((item, index) => {
            return index !== id;
          })})
    }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {addNote}
      />

      {noteLst.map((item, index) => { 
       return (
       <Note 
            onDelete={deleteNote}
            key={index} id={index} title={item.title} 
            content={item.content} 
        /> 
       );
    })}
      
      <Footer />
    </div>
  );
}

export default App;
