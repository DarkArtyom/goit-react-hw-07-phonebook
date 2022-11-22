import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'styles/Container.styled';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact, deleteContact } from 'redux/contactsSlice';

// const parseDataFromLS = (key, initialValue = []) => {
//   try {
//     return JSON.parse(localStorage.getItem(key)) ?? initialValue;
//   } catch (error) {
//     return initialValue;
//   }
// };

export const App = () => {
  const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(() => parseDataFromLS('contacts'));
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const formSubmit = ({ name, number }) => {
    console.log(name);
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    console.log(findName);
    if (findName) {
      alert(`${name} is already in contacts`);
    } else {
      const user = {
        id: nanoid(),
        name: name,
        number: number,
      };
      dispatch(addContact(user));
    }
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const deleteContacts = id => {
    dispatch(deleteContact(contacts.filter(contact => contact.id !== id)));
  };

  const getVisibleContacts = useMemo(() => {
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  }, [filter, contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmit} />

      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter value={filter} onChange={filterChange} />}
      {contacts.length > 0 && (
        <ContactsList
          visibleContacts={getVisibleContacts}
          onDeleteContact={deleteContacts}
        ></ContactsList>
      )}
    </Container>
  );
};
