import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Pagination from './Pagination';

describe('<Tabs />', () => {
    it('renders without props ', () => {
        const wrapper = shallow(
            <Pagination/>
        );

        expect(wrapper.find('section')).to.have.length(1);
    });
});
