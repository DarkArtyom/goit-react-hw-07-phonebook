import { Forma, Label, Input, ButtonSubmit } from './Form.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/operations';

export const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const user = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    console.log(user);
    dispatch(addContacts(user));
    form.reset();
  };

  const loginInputId = nanoid();
  const loginInputNubmerId = nanoid();

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
        // onChange={handleInput}
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
        // onChange={handleInput}
        required
      />
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Forma>
  );
};
