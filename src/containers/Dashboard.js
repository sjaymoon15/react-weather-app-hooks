import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Weather from '../components/Weather';
import Title from '../components/Title';
import { fetchWeathers } from '../actions';

export class UnconnectedDashboard extends Component {
  render() {
    const { fetchWeathers, weathers } = this.props;
    return (
      <Container data-test='container-dashboard'>
        <Search
          data-test='container-dashboard-search'
          fetchWeathers={fetchWeathers}
        />
        <Segment>
          <Title
            data-test='container-dashboard-title'
            city={weathers.city}
            error={weathers.error}
          />
          <Weather
            data-test='container-dashboard-weather'
            list={weathers.list}
          />
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weathers: state.weathers,
  };
};

const Dashboard = connect(mapStateToProps, { fetchWeathers })(
  UnconnectedDashboard
);

export default Dashboard;
