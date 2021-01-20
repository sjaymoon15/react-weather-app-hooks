import React from 'react';
import { Header, Message } from 'semantic-ui-react';

const Title = ({ city, error }) => {
  if (error) {
    return (
      <Message data-test='component-title-error' negative>
        <Message.Header data-test='component-title-error-message'>
          {error}
        </Message.Header>
      </Message>
    );
  } else {
    const header = city
      ? `Weather Information for ${city.name}, ${city.country}`
      : 'Another Weather App';
    return (
      <Header
        data-test='component-title'
        as='h2'
        content={header}
        textAlign='center'
      />
    );
  }
};

export default Title;
