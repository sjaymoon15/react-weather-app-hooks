import React, { useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import Search from '../components/Search';
import Weather from '../components/Weather';
import Title from '../components/Title';
import { fetchWeathers } from '../utils/helpers';
import { FETCH_WEATHERS_ERROR_MESSAGE } from '../utils/constants';

const Dashboard = () => {
  const [weatherList, setWeatherList] = useState(null);
  const [cityInfo, setCityInfo] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  const handleFormSubmit = async (searchQuery) => {
    try {
      const { data } = await fetchWeathers(searchQuery);
      setWeatherList(data.list);
      setCityInfo(data.city);
      setFetchError(null);
    } catch (error) {
      setWeatherList(null);
      setCityInfo(null);
      setFetchError(FETCH_WEATHERS_ERROR_MESSAGE);
    }
  };

  return (
    <Container data-test='container-dashboard'>
      <Search
        data-test='container-dashboard-search'
        handleFormSubmit={handleFormSubmit}
      />
      <Segment>
        <Title
          data-test='container-dashboard-title'
          city={cityInfo}
          error={fetchError}
        />
        <Weather data-test='container-dashboard-weather' list={weatherList} />
      </Segment>
    </Container>
  );
};

export default Dashboard;
