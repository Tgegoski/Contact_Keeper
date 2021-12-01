import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    if(contacts.length === 0) {
        return <h4>Please add a contact</h4>
    }

    const { contacts, filtered } = contactContext;

    return (
        <Fragment>
            {filtered !== null ? filtered.map(contact => (
                <ContactItem key={contact.id}
            contact={contact} />)) 
            : contacts.map(contact => (
                <ContactItem k={contact.id} contact={contact} />
            ))}
            
        </Fragment>
    );
};

export default Contacts;