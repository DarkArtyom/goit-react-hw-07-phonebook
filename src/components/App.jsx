import { Container } from 'styles/Container.styled';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 && <ContactsList></ContactsList>}
    </Container>
  );
};

//
