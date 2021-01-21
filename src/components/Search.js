import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import searchStyles from '../styles/searchStyles.module.css';
import { fetchWeathers } from '../actions';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = () => {
    dispatch(fetchWeathers(searchQuery));
    setSearchQuery('');
  };

  return (
    <div data-test='component-search' className={searchStyles.searchContainer}>
      <Form onSubmit={handleFormSubmit}>
        <Form.Input
          fluid
          action={{
            color: 'teal',
            content: 'Search',
          }}
          placeholder='Enter City or Zipcode'
          value={searchQuery}
          onChange={handleInputChange}
        />
      </Form>
    </div>
  );
};

export default Search;
