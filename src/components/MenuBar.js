import React from 'react';
import SearchForm from './SearchForm'

const MenuBar = (props) => {

    return (
        <div>
            <SearchForm placeholder="Search videos" buttonTitle="Search!" onSearch={(value) => props.onSearch(value) }/>
        </div>
    );

}

export default MenuBar;