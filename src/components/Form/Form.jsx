// import { useState } from 'react';
import { Forma, Label, Input, ButtonSubmit } from './Form.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
// import { getContacts } from 'redux/selectors';

export const Form = ({ onSubmit }) => {
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    console.log(form.elements.name);
    onSubmit(dispatch(addContact(form.elements.name)));
    form.reset();
  };

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const user = { name, number };

  const loginInputId = nanoid();
  const loginInputNubmerId = nanoid();

  const handleInput = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        dispatch(addContact(value));
        break;
      case 'number':
        dispatch(addContact(value));
        break;

      default:
        return;
    }
  };

  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   onSubmit(contacts);
  //   reset();
  // };

  // const reset = () => {
  //   setNumber('');
  //   setName('');
  // };

  return (
    <Forma onSubmit={handleSubmit}>
      <Label htmlFor={loginInputId}>Full name</Label>
      <Input
        id={loginInputId}
        type="text"
        name="name"
        placeholder="enter name"
        // value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleInput}
        required
      />
      <Label htmlFor={loginInputNubmerId}>Phone number</Label>
      <Input
        id={loginInputNubmerId}
        type="tel"
        name="number"
        // value={number}
        placeholder="enter number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleInput}
        required
      />
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Forma>
  );
};
