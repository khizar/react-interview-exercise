import * as types from '../constants/ActionTypes';

export function addFriend(name) {
    return {
        type: types.ADD_FRIEND,
        name
    };
}

export function deleteFriend(id) {
    return {
        type: types.DELETE_FRIEND,
        id
    };
}

export function starFriend(id) {
    return {
        type: types.STAR_FRIEND,
        id
    };
}

export function updateTotalPages(listLength) {
    const totalPages = Math.ceil(listLength / 2);
    return {
        type: types.SET_TOTAL_PAGES,
        totalPages,
    }
}

export function goToPage(pageNumber) {
    return {
        type: types.SET_PAGE_NUMBER,
        pageNumber,
    }
}
