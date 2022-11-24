import { ContactsListItem } from './ContactListItem/ContactListItem';
// import PropTypes from 'prop-types';
import { List } from './ContactListItem/ContactsList.styled';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilteredContacts } from 'redux/selectors';

export const ContactsList = () => {
  const filter = useSelector(getFilteredContacts);
  const contacts = useSelector(getContacts);

  const getVisibleContacts = useMemo(() => {
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  }, [filter, contacts]);

  return (
    <List>
      {getVisibleContacts.map(contact => (
        <ContactsListItem key={contact.id} visible={contact} />
      ))}
    </List>
  );
};
