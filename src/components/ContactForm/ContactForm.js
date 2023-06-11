import React from 'react';
import css from './ContactForm.module.css';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';


class ContactForm extends React.Component{
    state = {
        name: '',
        number: ''
    };
     
    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value, })
    };

    //onSubmit={this.formSubmitHandler}   onSubmit={this.addContact}
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            number: '',
        });
       // this.reset();
    };

    inputNameId = nanoid();
    inputNumberId =  nanoid();
    
    //oчищення форми після submit
    reset = () => {
        this.setState({ name: ' ', number: ' ' })
    };

    render() {
    const { name, number } = this.state;
    return (<div>
    <form className={css.form}
        onSubmit={this.handleSubmit}>
    <label htmlFor={this.inputNameId}>
        Name
        <input 
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я\s]+$" 
    title="Valid Characters: Letters and Spaces in Text"
    required
        value={name}
        onChange={this.handleChange}
        id={this.inputNameId}
        />
    </label>
          
    <label htmlFor={this.inputNumberId}>
       Number
       <input type="tel"
    name="number"
    pattern="\+?[0-9\s\-\(\)]+"
    title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
    required
        value={number}
        onChange={this.handleChange}
        id={this.inputNumberId}
        />
    </label>

    <button type="submit">Add contact</button>
        </form>
           </div>  
       )}
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;








/*class ContactForm extends React.Component{
    state = {
        name: '',
        number: ''
     }
     
    handleChange = event => {
    const { name, value } = event.currentTarget;
        this.setState({[name]: value,})
    }

    //onSubmit={this.formSubmitHandler}
    handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state); 
        this.reset();    
    }

    inputNameId = nanoid();
    inputNumberId =  nanoid();
    
    //oчищення форми після submit
    reset = () => {
        this.setState({name: ' ',number: ' '})
    }

    render() {
    
    const { name, number } = this.state;

    return (<div>
    <form className={css.form}
        onSubmit={this.handleSubmit}>
    <label htmlFor={this.inputNameId}>
        Name
        <input 
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я\s]+$" 
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
        value={name}
        onChange={this.handleChange}
        id={this.inputNameId}
        />
    </label>
          
    <label htmlFor={this.inputNumberId}>
       Number
       <input type="tel"
    name="number"
    pattern="\+?[0-9\s\-\(\)]+"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
     
        value={number}
        onChange={this.handleChange}
        id={this.inputNumberId}
        />
    </label>

    <button type="submit">Add contact</button>
        </form>
           </div>
       
       ) }
};*/