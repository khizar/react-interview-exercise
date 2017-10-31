import {it, describe} from 'mocha';
import {expect} from 'chai';

import {updateTotalPages, setGender, goToPage} from '../actions/FriendsActions';
import friendlist from './friendlist';
import {GENDER_FEMALE, GENDER_NONE, PAGE_SIZE} from "../constants/MiscelleneousConstants";

describe('Reducer: friendlist', () => {
    let INITIAL_STATE = {};

    beforeEach(() => {
        INITIAL_STATE = {
            friendsById: [
                {
                    id: 0,
                    name: 'Theodore Roosevelt',
                    starred: true,
                    gender: GENDER_NONE
                },
                {
                    id: 1,
                    name: 'Abraham Lincoln',
                    starred: false,
                    gender: GENDER_NONE
                },
                {
                    id: 2,
                    name: 'George Washington',
                    starred: false,
                    gender: GENDER_NONE
                }
            ],
            currentPageNumber: 1,
            totalPages: 1,
        };
    });


    it('it should return same state if passed some action not handled', () => {
        const nextState = friendlist(INITIAL_STATE, {});
        expect(nextState).to.equal(INITIAL_STATE);
    });

    it('it should update the total pages in the state', () => {
        let listLength = 3;
        const totalPages = () => Math.ceil(listLength/PAGE_SIZE);

        let nextState = friendlist( INITIAL_STATE, updateTotalPages(listLength));
        let expectedState = {
            ...INITIAL_STATE,
            totalPages: totalPages()
        };

        expect(nextState).to.deep.equal(expectedState);

        listLength = 5;
        nextState = friendlist( INITIAL_STATE, updateTotalPages(listLength));
        expectedState = {
            ...INITIAL_STATE,
            totalPages: totalPages()
        }
        expect(nextState).to.deep.equal(expectedState);
    });

    it('should set the currentPageNumber in state', () => {
        const currentPageNumber = 2;
        const expectedState = {
               ...INITIAL_STATE,
                currentPageNumber
       };

        const nextState = friendlist(INITIAL_STATE, goToPage(currentPageNumber));

       expect(nextState).to.deep.equal(expectedState);
    });

    it('should set the right gender in state', () => {
        const id = 1;
        const gender= GENDER_FEMALE;
        const expectedFriendState = {
            id: 1,
            name: 'Abraham Lincoln',
            starred: false,
            gender: GENDER_FEMALE
        }
        const expectedState = {
            ...INITIAL_STATE,
            friendsById: [
                ...INITIAL_STATE.friendsById, ...expectedFriendState
            ]
        };

        const nextState = friendlist(INITIAL_STATE, setGender(id, gender));

        expect(nextState).to.deep.equal(expectedState);
    });

});


