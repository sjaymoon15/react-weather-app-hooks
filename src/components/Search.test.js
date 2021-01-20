import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../utils/testUtils';
import Search from './Search';

const fetchWeathersMock = jest.fn();

const defaultProps = {
  fetchWeathers: fetchWeathersMock,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Search {...setupProps} />);
};

describe('Search', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-search');
    expect(component.length).toBe(1);
  });

  describe('handleInputChange', () => {
    it('initially state searchQuery is empty string', () => {
      const searchQuery = wrapper.instance().state.searchQuery;
      expect(searchQuery).toBe('');
    });

    it('handleChange updates state value', () => {
      const newValue = 'newValue';
      const newEvent = {
        target: {
          value: newValue,
        },
      };
      wrapper.instance().handleInputChange(newEvent);
      const newSearchQuery = wrapper.instance().state.searchQuery;
      expect(newSearchQuery).toBe(newValue);
    });
  });

  describe('handleFormSubmit', () => {
    it('calls fetchWeathers props function and set searchQuest state to an empty string', () => {
      wrapper.instance().handleFormSubmit();

      const fetchWeathersCallCount = fetchWeathersMock.mock.calls.length;
      const searchQuery = wrapper.instance().state.searchQuery;

      expect(fetchWeathersCallCount).toBe(1);
      expect(searchQuery).toBe('');
    });
  });
});
