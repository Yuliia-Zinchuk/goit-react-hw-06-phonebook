import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'redux/contacts/contactsSlice';
import { onFilter } from 'redux/filter/filterSlice';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispath = useDispatch();

  const onAddContact = data => {
    if (contacts.find(contact => contact.name === `${data.name}`)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    const contact = {
      id: nanoid(),
      ...data,
    };
    dispath(addContact(contact));
  };

  const handleChange = e => {
    const { value } = e.target;
    dispath(onFilter(value));
  };

  const onDeleteContact = contactId => {
    dispath(deleteContact(contactId));
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactsForm onSubmit={onAddContact} />
      </Section>

      <Section title="Contacts">
        {<Filter handleChange={handleChange} />}
        {contacts && <ContactsList onDeleteContact={onDeleteContact} />}
      </Section>
    </>
  );
};
