import React from 'react';

const SearchBar = ({ searchfield, filterChange }) => {

    
    return (
        <div className='searchbar'>
            <a href='https://api.rawg.io/api/games'></a>
            <h4 className='header'> Search For Games </h4>
            <input
            type='search'
            placeholder="Search For A Game Title"
            onChange={filterChange}
            />
          
        </div>
    );
}

export default SearchBar;