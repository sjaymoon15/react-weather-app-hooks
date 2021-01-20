import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import searchStyles from '../styles/searchStyles.module.css';

const Search = ({ fetchWeathers }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = () => {
    fetchWeathers(searchQuery);
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
