import React from 'react';
import './search-box.css';
export const SearchBox = ({search}) => {
    return <input className="search" type="search" onChange={(e) =>  search(e.target.value)} placeholder='search'/>
}
        