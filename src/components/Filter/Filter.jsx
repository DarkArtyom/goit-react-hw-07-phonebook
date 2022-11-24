import { LabelSearch, InputSearch } from './Filter.styled.js';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice.js';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <LabelSearch>
      Find contact by name
      <InputSearch
        type="text"
        name="search"
        placeholder="enter for search"
        value={value}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </LabelSearch>
  );
};
