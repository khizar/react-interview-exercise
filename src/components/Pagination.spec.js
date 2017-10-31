import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import Pagination from './Pagination';

describe('<Pagination />', () => {

    it('shallow renders without props ', () => {
        const wrapper = shallow(
            <Pagination/>
        );

        expect(wrapper.find('section')).to.have.length(1);
    });

    it('renders two links', () => {
        const wrapper = shallow(
            <Pagination/>
        );

        expect(wrapper.find('a')).to.have.length(2);
    });


    it('should fire handleNextPageClick once when clicking on the next link', () => {
        sinon.spy(Pagination.prototype, 'handleNextPageClick');
        const rendered = mount(
            <Pagination />
        );

        rendered.find('a.js-nextButton').simulate('click');
        expect(Pagination.prototype.handleNextPageClick.calledOnce).to.equal(true);
        Pagination.prototype.handleNextPageClick.restore();
    });

    it('should fire handlePrevPageClick once when clicking on the previous link', () => {
        sinon.spy(Pagination.prototype, 'handlePrevPageClick');
        const rendered = mount(
            <Pagination />
        );

        rendered.find('a.js-prevButton').simulate('click');
        expect(Pagination.prototype.handlePrevPageClick.calledOnce).to.equal(true);
        Pagination.prototype.handlePrevPageClick.restore();
    });
});
