import { ContactsListItem } from './ContactListItem/ContactListItem';
import { List } from './ContactListItem/ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(contact => (
        <ContactsListItem key={contact.id} visible={contact} />
      ))}
    </List>
  );
};
