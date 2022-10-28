import PropTypes from 'prop-types';
import { ContactsListItem } from './ContactsListItem';
import css from './ContactsList.module.css';
export const ContactsList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <>
      {/* <div className={css.contacts_wraper}> */}
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
      {/* </div> */}
    </>
  );
};

ContactsList.propTypes = {
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
