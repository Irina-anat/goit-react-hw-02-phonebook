import React from 'react';
import css from './App.module.css'
import { nanoid } from "nanoid";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import  ContactForm  from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';


export class App extends React.Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  

  addContact = ({ name, number }) => {
   const contact = {
    id: nanoid(),
    name,
    number,
    };
    
  const lowerCaseName = name.toLowerCase();

  this.state.contacts.some(
    contact =>
      (contact.name.toLowerCase() === lowerCaseName && contact.number === number) || contact.number === number || contact.name.toLowerCase() === lowerCaseName)

  ?  Notify.warning('Контакт з таким іменем або номером вже присутній у телефонній книзі.')
 
  : this.setState(prevState => ({
    contacts: [contact, ...prevState.contacts],
  }))
  };

  //відфільтровую контакти і залишаю ті ел. id яких не співпадають
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };

  /*const  normalizedFilter = this.state.filter.toLowerCase();*/

  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={css.container__phonebook}>
          <h1>Phonebook</h1>
        <ContactForm 
          onSubmit={this.addContact}/>
          <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={this.visibleContacts()}
          onDeleteContact={this.deleteContact} />   
      </div>
    )}
};




Notify.init({
  width: '500px',
  fontSize: '20px',
position: 'center-top',
closeButton: false,
});




/*export class App extends React.Component {

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
],
  filter: ''
}
  
  addContact = text => {
   console.log(text)
 }
  //відфільтровую контакти і залишаю ті ел. id яких не співпадають
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

//this.props.onSubmit(this.state) ContactForm - дані при відправці ф-ми
  formSubmitHandler = data => {
  console.log(data)
}
   
  render() {
    const {contacts} = this.state
    return (
      <div className={css.container__phonebook}>
        <h1>Phonebook</h1>
        <ContactForm 
          onSubmit={this.formSubmitHandler}
        />
        <h2>Contacts</h2>
        <ContactList contacts={contacts}
          onDeleteContact={this.deleteContact} />
      </div>
    )}
}*/

/*addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
   
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
  };
*/

