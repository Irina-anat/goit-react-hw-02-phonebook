import React from 'react'
import css from './ContactForm.module.css'

 class ContactForm extends React.Component{
    state = {
 name: ''
 }


    render() {
        const { id } = this.props;
        return (<div>
            <form >
    <label>
        Name
        <input 
        type="text"
        name="name"
        id={id}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
    </label>
          
    <label>
       Number
       <input type="tel"
       name="number"
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required />
    </label>

    <button type="submit">Add contact</button>
        </form>
           </div>
       
       ) }
};

export default ContactForm;