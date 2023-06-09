import React from 'react';
import css from './App.module.css'
import { nanoid } from "nanoid";
import  ContactForm  from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';




export class App extends React.Component {

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
],
  filter: ''
}
  
  contactId = nanoid();
  //відфільтровую контакти і залишаю ті ел. id яких не співпадають
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact=>contact.id !== contactId), 
    }))
  }
  
  
  render() {
    const {contacts} = this.state
    return (
      <div className={css.container__phonebook}>
        <h1>Phonebook</h1>
        <ContactForm id={this.contactId} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />

      </div>
    )
  }

}


