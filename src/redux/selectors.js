export const getContacts = state => state.contacts;
console.log(getContacts);
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilteredContacts = state => state.filter;
