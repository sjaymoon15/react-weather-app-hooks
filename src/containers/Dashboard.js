import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import Search from '../components/Search';
import Weather from '../components/Weather';
import Title from '../components/Title';

const Dashboard = () => {
  const weathers = useSelector((store) => store.weathers);

  return (
    <Container data-test='container-dashboard'>
      <Search data-test='container-dashboard-search' />
      <Segment>
        <Title
          data-test='container-dashboard-title'
          city={weathers.city}
          error={weathers.error}
        />
        <Weather data-test='container-dashboard-weather' list={weathers.list} />
      </Segment>
    </Container>
  );
};

export default Dashboard;
