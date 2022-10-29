import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contactsActions';

// export const contactsReducer = createReducer([], {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });
