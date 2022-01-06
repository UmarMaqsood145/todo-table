import React, { useState } from "react";
import {nanoid} from "nanoid";
import './components/style.css';
// import data from "./mock-data.json";
import Read from "./components/Read";
import Edit from "./components/Edit";
import { Fragment } from "react/cjs/react.production.min";

function App() {

  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const handleAddFormChange = (event)=>{
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event)=> {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

    const [editContactId, setEditContactId] = useState(null);
    const handleEditCLick = (event, contact)=>{
      event.preventDefault();
      setEditContactId(contact.id);

      const formValues ={
        fullName: contact.fullName,
        address: contact.address,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      }
      setEditFormData(formValues);

    };
    const [EditFormData, setEditFormData] = useState({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });

    const handleEditFormChange = (event)=>{
      event.preventDefault();
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = {...EditFormData};
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData);
    };

    const handleEditFormSubmit = (event)=>{
      event.preventDefault();

      const editedContact = {
        id:editContactId,
        fullName: EditFormData.fullName,
        address: EditFormData.address,
        phoneNumber: EditFormData.phoneNumber,
        email: EditFormData.email,
      }

      const newContacts = [ ...contacts];
      const index = contacts.findIndex((contact)=> contact.id === editContactId);
      newContacts[index] = editedContact;
      setContacts(newContacts);
      setEditContactId(null);
    };

    const handleCloseClick = () => {
      setEditContactId(null);
    };

    // Delete Data
    const handleDeleteClick = (contactId)=>{
      const newContacts = [...contacts];
      const index = contacts.findIndex((contact)=> contact.id === contactId);

      newContacts.splice(index, 1);
      setContacts(newContacts);
    }


  return (
    <>
      <div className="app-container">
      <form action="">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact)=>(
              <Fragment>

                {editContactId === contact.id ?  
                (<Edit 
                  editFormData ={EditFormData}
                  handleEditFormChange = {handleEditFormChange}
                  handleEditFormSubmit = {handleEditFormSubmit}
                  handleCloseClick = {handleCloseClick} />) :  
                (<Read 
                  contact = {contact} 
                  handleEditCLick={handleEditCLick}
                  handleDeleteClick = {handleDeleteClick} />)}
              </Fragment>
            ))
          }
        </tbody>
      </table> 
      </form>

      <form action="" onSubmit={handleAddFormSubmit}>
        <div id="formSet">
          <h2>Add More Data</h2>
          <input type="text" required name="fullName" placeholder="Enter Your Name..." onChange={handleAddFormChange} />
          <input type="text" required name="address" placeholder="Enter Your Address..." onChange={handleAddFormChange}  />
          <input type="text" required name="phoneNumber" placeholder="Enter Your Phone Number..." onChange={handleAddFormChange}  />
          <input type="email" required name="email" placeholder="Enter Your Email..." onChange={handleAddFormChange}  />
          <button type="submit">Add Data</button>
        </div>
      </form>
      </div>

    </>
  );
}

export default App;
