import React, {Component} from 'react';
import styles from './FriendListApp.css';
import {connect} from 'react-redux';

import {
    addFriend, deleteFriend, starFriend,
    updateTotalPages, goToPage
} from '../actions/FriendsActions';
import {FriendList, AddFriendInput} from '../components';
import {Pagination} from "../components/index";
import {PAGE_SIZE} from "../constants/MiscelleneousConstants";

class FriendListApp extends Component {

    componentWillMount() {
        const listLength = this.props.friendlist.friendsById.length;
        this.updatePagination(listLength);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.friendlist.friendsById.length !== nextProps.friendlist.friendsById.length) {
            this.updatePagination(nextProps.friendlist.friendsById.length);
        }
    }

    updatePagination = (listLength) => {
        if (listLength >= PAGE_SIZE) {
            this.props.updateTotalPages(listLength);
        }
        const pageNumber = this.props.friendlist.currentPageNumber;
        if(pageNumber !== 1 && pageNumber > Math.ceil(listLength / PAGE_SIZE) ){
            this.props.goToPage(--this.props.friendlist.currentPageNumber);
        }
    };

    render() {
        const {friendlist: {friendsById, currentPageNumber, totalPages}} = this.props;

        const actions = {
            addFriend: this.props.addFriend,
            deleteFriend: this.props.deleteFriend,
            starFriend: this.props.starFriend,
            goToPage: this.props.goToPage,
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
