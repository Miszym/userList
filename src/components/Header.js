import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ headerText }) => {
   return (
      <header className="header" data-testid="header">
         {headerText}
      </header>
   );
};

Header.propTypes = {
   headerText: PropTypes.string
};

Header.defaultProps = {
   headerText: 'Header'
};

export default Header;
