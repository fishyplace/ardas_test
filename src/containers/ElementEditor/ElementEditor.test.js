import React from 'react';
import ElementEditor from './ElementEditor';

import { shallow } from 'enzyme';

it('should render without crashing', () => {

    const id = '3';
    const data = [{
        id: 3,
        name: "Today_task1",
        creation_date: "2015-04-21T06:50:21",
        due_date: "2015-04-22T23:59:00",
        start_date: "2015-04-21T00:00:01",
        is_completed: false,
        is_archived: false,
        estimated_effort: 5.5,
        actual_effort: 3.3,
        physical_progress: 60,
        obj_status: "active",
        description: "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        project_id: 0
      }];
    const match = {
        params: {
            id
        }
    }
    
    const component = shallow(<ElementEditor match={match} data={data} />);
    expect(component).toMatchSnapshot();
})