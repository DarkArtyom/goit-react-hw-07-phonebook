import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
console.log(getContacts);
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilteredContacts = state => state.filter;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilteredContacts],
  (contacts, filteredContacts) => {
    const normalazedFilter = filteredContacts.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  }
);
