import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import searchStyles from '../styles/searchStyles.module.css';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleFormSubmit = () => {
    this.props.fetchWeathers(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <div
        data-test='component-search'
        className={searchStyles.searchContainer}
      >
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Input
            fluid
            action={{
              color: 'teal',
              content: 'Search',
            }}
            placeholder='Enter City or Zipcode'
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
        </Form>
      </div>
    );
  }
}
