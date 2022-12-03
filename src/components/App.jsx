import { Container } from 'styles/Container.styled';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 && <ContactsList></ContactsList>}
    </Container>
  );
};

//
