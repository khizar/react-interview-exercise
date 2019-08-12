import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FriendListItem.css';
import {GENDER_FEMALE, GENDER_MALE, GENDER_NONE} from "../constants/MiscelleneousConstants";

class FriendListItem extends Component {


    render() {
        const {gender} = this.props;
        return (
            <li className={styles.friendListItem}>
                <div className={styles.friendInfos}>
                    <div><span>{this.props.name}</span></div>
                    <div>
                        <small>xx friends in common</small>
                    </div>
                    <div className={styles.genderSelectWrapper}>
                        <label className={styles.genderSelectLabel}>
                            <small>Gender:</small>
                        </label>
                        <select
                            className={classnames('js-genderSelector', styles.genderSelect)}
                            value={gender}
                        >
                            <option value={GENDER_NONE}>--</option>
                            <option value={GENDER_MALE}>Male</option>
                            <option value={GENDER_FEMALE}>Female</option>
                        </select>
                    </div>
                </div>
                <div className={styles.friendActions}>
                    <button className={`btn btn-default ${styles.btnAction}`}
                            onClick={() => this.props.starFriend(this.props.id)}>
                        <i className={classnames('fa', {
                            'fa-star': this.props.starred,
                            'fa-star-o': !this.props.starred
                        })}/>
                    </button>
                    <button className={`btn btn-default ${styles.btnAction}`}
                            onClick={() => this.props.deleteFriend(this.props.id)}>
                        <i className="fa fa-trash"/>
                    </button>
                </div>
            </li>
        );
    }

}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool,
    starFriend: PropTypes.func.isRequired,
    setGender: PropTypes.func.isRequired,
    gender: PropTypes.string,
};

export default FriendListItem
