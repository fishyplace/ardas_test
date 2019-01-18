import React from 'react';
import EditableField from './EditableField';

import { shallow } from 'enzyme';

it('should render without crashing', () => {
    const component = shallow(<EditableField />);

    expect(component).toMatchSnapshot();
})