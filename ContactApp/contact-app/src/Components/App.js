import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import api from "../api/contacts";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  //retrieve contacts
  const retriveContacts = async () =>{
    const response = await  api.get("/contacts");
    return response.data;
  }

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  

  
  

   useEffect(() => {
   const getAllContacts = async () => {
    const allContacts = await retriveContacts();
    if(allContacts) setContacts(allContacts);

   };
   getAllContacts();

  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
     
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts}/>
      
    </div>
  );
}

export default App;