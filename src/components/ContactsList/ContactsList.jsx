import PropTypes from 'prop-types';
import { ContactsListItem } from './ContactsListItem';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import css from './ContactsList.module.css';

export const ContactsList = ({ onDeleteContact }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <>
      <ul className={css.contactsList}>
        {contacts
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <li className={css.contactItem} key={id}>
              <ContactsListItem
                name={name}
                number={number}
                onDeleteContact={() => {
                  onDeleteContact(id);
                }}
              />
            </li>
          ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
