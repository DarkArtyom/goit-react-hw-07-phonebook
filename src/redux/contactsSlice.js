import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

const contactInitialState = [
  // { id: 0, name: 'Art', number: 4525236236362 },
  // { id: 1, name: 'Bat', number: 2342525 },
  // { id: 2, name: 'Master React', number: 362677472 },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(newContact) {
        return {
          payload: {
            ...newContact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
