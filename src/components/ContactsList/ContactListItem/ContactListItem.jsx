import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Item, BtnDelete } from './ContactsList.styled';
import { deleteContact } from 'redux/operations';

export const ContactsListItem = ({ visible }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      {visible.name}: {visible.number}
      <BtnDelete
        type="button"
        onClick={() => dispatch(deleteContact(visible.id))}
      >
        Delete
      </BtnDelete>
    </Item>
  );
};

ContactsListItem.propTypes = {
  visible: PropTypes.object.isRequired,
};
