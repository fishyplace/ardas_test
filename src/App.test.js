import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

it('should render without crashing', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
