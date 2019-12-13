import React from 'react';

import './search-bar.styles.css';

function SearchBar(){
    return(
        <div className="search-bar ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        placeholder="Enter Search Terms"
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;