import React from 'react';
import PropTypes from 'prop-types';

const SingleRow = ({ name, username }) => {
   return (
      <li className="user-list__row" data-testid="single-row">
         <span className="user-list__row--distinct">{name}</span>
         {username ? ` @${username}` : ''}
      </li>
   );
};

SingleRow.propTypes = {
   name: PropTypes.string,
   username: PropTypes.string
};

SingleRow.defaultProps = {
   name: 'undefined',
   username: ''
};

export default SingleRow;
