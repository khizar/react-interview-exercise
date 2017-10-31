import React, {Component, PropTypes} from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import {PAGE_SIZE} from "../constants/MiscelleneousConstants";

class FriendList extends Component {
    render() {
        const {pageNumber} = this.props;
        const startIndex = pageNumber === 1 ? 0 : PAGE_SIZE * (pageNumber - 1);
        const endIndex = pageNumber === 1 ? PAGE_SIZE - 1 : (PAGE_SIZE * pageNumber) - 1;

        return (
            <ul className={styles.friendList}>
                {
                    this.props.friends.filter((friend, listIndex) => {
                        return ((listIndex >= startIndex) && (listIndex <= endIndex));
                    })
                        .map((friend, index) => {

                            return (
                                <FriendListItem
                                    key={friend.id}
                                    id={friend.id}
                                    name={friend.name}
                                    starred={friend.starred}
                                    {...this.props.actions} />
                            );

                        })
                }
            </ul>
        );
    }

}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    pageNumber: PropTypes.number.isRequired
};

export default FriendList;
