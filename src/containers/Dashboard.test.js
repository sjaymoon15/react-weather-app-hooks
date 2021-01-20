import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../utils/testUtils';
import { UnconnectedDashboard } from './Dashboard';
import { weatherResponseMock } from '../utils/testMocks';

describe('Dashboard', () => {
  let wrapper;
  const fetchWeathersMock = jest.fn();
  let propsMock;

  beforeEach(() => {
    propsMock = {
      fetchWeathers: fetchWeathersMock,
      weathers: weatherResponseMock,
    };

    wrapper = shallow(<UnconnectedDashboard {...propsMock} />);
  });

  describe('render', () => {
    it('renders Dashboard component', () => {
      const component = findByTestAttr(wrapper, 'container-dashboard');

      expect(component.length).toBe(1);
    });

    it('renders Search component', () => {
      const component = findByTestAttr(wrapper, 'container-dashboard-search');

      expect(component.length).toBe(1);
    });

    it('renders Title component', () => {
      const component = findByTestAttr(wrapper, 'container-dashboard-title');

      expect(component.length).toBe(1);
    });

    it('renders Weather component', () => {
      const component = findByTestAttr(wrapper, 'container-dashboard-weather');

      expect(component.length).toBe(1);
    });
  });
});
