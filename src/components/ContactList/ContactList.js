import React from 'react' 
import css from './ContactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li className={css.contact__list} key={id}>
                <p>{name}</p>
                <p>{number}</p>

                <button onClick={()=>onDeleteContact(id)}>Delete</button>
            </li>))}
    </ul>)
    

export default ContactList 