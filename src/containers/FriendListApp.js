import React, { useEffect } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {
  addFriend, deleteFriend, starFriend,
  updateTotalPages, goToPage
} from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';
import { Pagination } from "../components/index";
import { PAGE_SIZE } from "../constants/MiscelleneousConstants";

const FriendListApp = ({
                         friendlist: {
                           friendsById,
                           currentPageNumber,
                           totalPages
                         },
                         goToPage,
                         updateTotalPages,
                         addFriend,
                         deleteFriend,
                         starFriend,
                       }) => {
  const listLength = friendsById.length;

  const updatePagination = (listLength) => {
    if (listLength >= PAGE_SIZE) {
      updateTotalPages(listLength);
    }
    const pageNumber = currentPageNumber;
    if (pageNumber !== 1 && pageNumber > Math.ceil(listLength / PAGE_SIZE)) {
      goToPage(--currentPageNumber);
    }
  };
  useEffect(() => {
    updatePagination(listLength);
  }, []);

  useEffect(() => {
    updatePagination(friendsById.length);
  }, [friendsById.length]);

  const actions = {
    addFriend,
    deleteFriend,
    starFriend,
    goToPage,
  };
  return (
    <div className={styles.friendListApp}>
      <h1>The FriendList</h1>
      <AddFriendInput addFriend={actions.addFriend}/>
      <FriendList friends={friendsById} actions={actions} pageNumber={currentPageNumber}/>
      <Pagination
        pageNumber={currentPageNumber}
        totalPages={totalPages}
        goToPage={actions.goToPage}
      />
    </div>
  );
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  updateTotalPages,
  goToPage,
})(FriendListApp)
