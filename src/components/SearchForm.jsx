import React, { useState } from "react";

import PropTypes from 'prop-types';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="formg-roup mt-3 mb-3 px-5">
            <input type="search" className="form-control" value={searchTerm} onChange={handleSearch} placeholder="Type to search" />
        </div>
    </form>
  
);
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchForm;
