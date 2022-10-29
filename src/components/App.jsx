//import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
//--------------------redux
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
//import { selectFilter } from 'redux/filter/filterSelectors';
import { useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'redux/contacts/contactsSlice';
import { onFilter } from 'redux/filter/filterSlice';

export const App = () => {
  const contacts = useSelector(selectContacts);
  //const filter = useSelector(selectFilter);
  const dispath = useDispatch();
  //   const [contacts, setContacts] = useState(
  //     () =>
  //       JSON.parse(window.localStorage.getItem('contacts')) ??
  //       [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onAddContact = data => {
    if (contacts.find(contact => contact.name === `${data.name}`)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    const contact = {
      id: nanoid(),
      ...data,
    };
    // const newContact = { id: nanoid(), name, number };
    dispath(addContact(contact));

    //setContacts([contact, ...contacts]);
  };

  const handleChange = e => {
    const { value } = e.target;

    //setFilter(value); // тут писать диспатч
    dispath(onFilter(value));
  };

  // const onDeleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };
  const onDeleteContact = contactId => {
    dispath(deleteContact(contactId));
    //contacts.filter(contact => contact.id !== contactId);
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactsForm onSubmit={onAddContact} />
      </Section>

      <Section title="Contacts">
        {<Filter handleChange={handleChange} />}
        {contacts && (
          <ContactsList
            // contacts={contacts}
            // filter={filter}
            onDeleteContact={onDeleteContact}
          />
        )}
      </Section>
    </>
  );
};
