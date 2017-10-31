import * as types from '../constants/ActionTypes';

const initialState = {
    friendsById: [
        {
            id: 0,
            name: 'Theodore Roosevelt',
            starred: true
        },
        {
            id: 1,
            name: 'Abraham Lincoln',
            starred: false
        },
        {
            id: 2,
            name: 'George Washington',
            starred: false
        }
    ],
    currentPageNumber: 1,
    totalPages: 1,
};

export default function friends(state = initialState, action) {
    switch (action.type) {
        case types.ADD_FRIEND:
            return {
                ...state,
                friendsById: [
                    ...state.friendsById,
                    {
                        id: state.friendsById.length,
                        name: action.name
                    }
                ],
            };
        case types.DELETE_FRIEND:
            return {
                ...state,
                friendsById: state.friendsById.filter((item, index) => index !== action.id)
                    .map((friend, index) => {
                        friend.id = index;
                        return friend;
                    })
            };
        case types.STAR_FRIEND:
            let friends = [...state.friendsById];
            let friend = friends.find((item, index) => index === action.id);
            friend.starred = !friend.starred;
            return {
                ...state,
                friendsById: friends
            };
        case types.SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.totalPages,
            };
        case types.SET_PAGE_NUMBER:
            return {
                ...state,
                currentPageNumber: action.pageNumber
            };

        default:
            return state;
    }
}
