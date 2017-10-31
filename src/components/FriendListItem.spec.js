import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import FriendListItem from './FriendListItem';

describe('<FriendsListItem />', () => {

    it('shallow renders without props ', () => {
        const wrapper = shallow(
            <FriendListItem/>
        );

        expect(wrapper.find('li')).to.have.length(1);
    });

    it('contains one gender select', () => {
        const wrapper = shallow(
            <FriendListItem/>
        );

        expect(wrapper.find('select.js-genderSelector')).to.have.length(1);
    });


    it('should fire onGenderChangeHandler once when gender selector changed', () => {
        const onGenderChange = sinon.spy();
        const rendered = mount(
            <FriendListItem setGender={onGenderChange}/>
        );

        rendered.find('select.js-genderSelector').simulate('change');
        expect(onGenderChange.calledOnce).to.equal(true);
    });

    it('should not throw any propType warnings if proper props passed', () => {
        //ensure proptype warnings fail test
        sinon.stub(console, 'error').callsFake((warning) => {
            throw new Error(warning)
        })
        const props = {
            id: 2,
            name: 'name',
            starFriend: ()=> void 0,
            setGender: () => void 0
        };
        const rendered = mount(
            <FriendListItem {...props}/>
        );

        console.error.restore()

    })

});