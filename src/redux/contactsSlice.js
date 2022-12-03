import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { fetchContacts, addContacts, deleteContact } from './operations';

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => (state.isLoading = true);

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      return state.items.filter(contact => contact.id !== action.payload);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.items.push(action.payload);
//       },
//       prepare(newContact) {
//         return {
//           payload: {
//             ...newContact,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return state.items.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
