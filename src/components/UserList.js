import React from 'react';
import SingleRow from './SingleRow';
import PropTypes from 'prop-types';

const UserList = ({ userData }) => {
   const userList = userData.map(user => (
      <SingleRow
         key={user.id}
         name={user.name}
         username={user.username}
      ></SingleRow>
   ));
   return <ol>{userList}</ol>;
};

UserList.propTypes = {
   userData: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         name: PropTypes.string,
         username: PropTypes.string
      })
   ).isRequired
};

export default UserList;
