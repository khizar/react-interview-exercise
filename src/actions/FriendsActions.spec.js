import {it, describe} from 'mocha';
import {expect} from 'chai';

import * as types from '../constants/ActionTypes';
import {updateTotalPages, goToPage, setGender} from './FriendsActions';
import {GENDER_FEMALE, PAGE_SIZE} from "../constants/MiscelleneousConstants";

describe('FriendsAction', () => {
    it('should create an action of type: SET_TOTAL_PAGES', () => {
        const listLength = 2;
        const totalPages = listLength / PAGE_SIZE;
        const expectedAction = {
            type: types.SET_TOTAL_PAGES,
            totalPages
        };

        expect(updateTotalPages(listLength)).to.deep.equal(expectedAction);
    });

    it('should create an action of type: SET_PAGE_NUMBER', () => {
        const pageNumber = 2;
        const expectedAction = {
            type: types.SET_PAGE_NUMBER,
            pageNumber
        };

        expect(goToPage(pageNumber)).to.deep.equal(expectedAction);
    });

    it('should create an action of type: SET_GENDER', () => {
        const id = 2;
        const gender = GENDER_FEMALE;

        const expectedAction = {
            type: types.SET_GENDER,
            id,
            gender
        };

        expect(setGender(id, gender)).to.deep.equal(expectedAction);
    });
});
