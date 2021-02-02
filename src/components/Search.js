import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import searchStyles from '../styles/searchStyles.module.css';

const Search = ({ handleFormSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = () => {
    handleFormSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <div data-test='component-search' className={searchStyles.searchContainer}>
      <Form onSubmit={onSubmit}>
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
