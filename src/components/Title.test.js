import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../utils/testUtils';
import Title from './Title';
import { weatherResponseMock } from '../utils/testMocks';
import { FETCH_WEATHERS_ERROR_MESSAGE } from '../utils/constants';

describe('Title', () => {
  describe('When error props is not null', () => {
    const defaultProps = {
      city: weatherResponseMock.city,
      error: FETCH_WEATHERS_ERROR_MESSAGE,
    };

    const setup = (props = {}) => {
      const setupProps = { ...defaultProps, ...props };
      return shallow(<Title {...setupProps} />);
    };

    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    it('renders the right component', () => {
      const component = findByTestAttr(wrapper, 'component-title-error');

      expect(component.length).toBe(1);
    });

    it('shows the correct error message', () => {
      const component = findByTestAttr(
        wrapper,
        'component-title-error-message'
      ).dive();

      expect(component.text()).toBe(FETCH_WEATHERS_ERROR_MESSAGE);
    });
  });

  describe('When error props is null', () => {
    describe('When there is city props', () => {
      const defaultProps = { city: weatherResponseMock.city, error: null };

      const setup = (props = {}) => {
        const setupProps = { ...defaultProps, ...props };
        return shallow(<Title {...setupProps} />);
      };

      let wrapper;
      beforeEach(() => {
        wrapper = setup();
      });

      it('renders the right component', () => {
        const component = findByTestAttr(wrapper, 'component-title');

        expect(component.length).toBe(1);
      });

      it('renders the correct message', () => {
        const component = findByTestAttr(wrapper, 'component-title').dive();

        expect(component.text()).toBe(
          `Weather Information for ${defaultProps.city.name}, ${defaultProps.city.country}`
        );
      });
    });

    describe('When there is no city props', () => {
      const defaultProps = { city: null, error: null };

      const setup = (props = {}) => {
        const setupProps = { ...defaultProps, ...props };
        return shallow(<Title {...setupProps} />);
      };

      let wrapper;
      beforeEach(() => {
        wrapper = setup();
      });

      it('renders the right component', () => {
        const component = findByTestAttr(wrapper, 'component-title');

        expect(component.length).toBe(1);
      });

      it('renders the correct message', () => {
        const component = findByTestAttr(wrapper, 'component-title').dive();

        expect(component.text()).toBe('Another Weather App');
      });
    });
  });
});
