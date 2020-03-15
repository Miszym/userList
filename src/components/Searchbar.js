import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ setFilterValue }) => {
   const [searchInput, setSearchInput] = useState('');

   const handleChange = target => {
      setSearchInput(target.value);
      if (typeof setFilterValue === 'function') {
         setFilterValue(target.value.trim());
      }
   };

   return (
      <input
         type="text"
         name="search-input"
         placeholder="Search by user name..."
         className="search-input"
         data-testid="search-input"
         value={searchInput}
         onChange={e => handleChange(e.target)}
      ></input>
   );
};

SearchBar.propTypes = {
   setFilterValue: PropTypes.func
};

export default SearchBar;
