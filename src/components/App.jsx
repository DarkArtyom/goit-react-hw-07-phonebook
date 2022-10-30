import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'styles/Container.styled';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useMemo } from 'react';

const parseDataFromLS = (key, initialValue = []) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? initialValue;
  } catch (error) {
    return initialValue;
  }
};

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => parseDataFromLS('contacts'));

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = ({ name, number }) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findName) {
      alert(`${name} is already in contacts`);
    } else {
      const user = {
        id: nanoid(),
        name: name,
        number: number,
      };
      setContacts([...contacts, user]);
    }
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
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
          onDeleteContact={deleteContact}
        ></ContactsList>
      )}
    </Container>
  );
};
