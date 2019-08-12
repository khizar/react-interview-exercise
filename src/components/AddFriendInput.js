import React, { useState, useCallback  } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

const AddFriendInput = ({addFriend}) => {
  const [name, setName] = useState('');
  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    const name = e.target.value.trim();
    if (e.which === 13) {
      addFriend(name);
      setName('');
    }
  },[]);

  return (
    <input
      type="text"
      autoFocus="true"
      className={classnames('form-control', styles.addFriendInput)}
      placeholder="Type the name of a friend"
      value={name}
      onChange={handleChange}
      onKeyDown={handleSubmit} />
  );
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
