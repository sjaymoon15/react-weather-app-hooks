import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../utils/testUtils';
import { weatherResponseMock } from '../utils/testMocks';
import Weather from './Weather';

const defaultProps = {
  list: weatherResponseMock.list,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Weather {...setupProps} />);
};

describe('Weather', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-weather');
    expect(component.length).toBe(1);
  });
});
