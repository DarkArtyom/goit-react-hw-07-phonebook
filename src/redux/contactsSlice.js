import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = [
  { id: 0, name: 'Art', number: 4525236236362 },
  { id: 1, text: 'Bat', number: 2342525 },
  { id: 2, text: 'Master React', number: 362677472 },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteTask(state, action) {},
  },
});

export const contactsReducer = contactsSlice.reducer;
