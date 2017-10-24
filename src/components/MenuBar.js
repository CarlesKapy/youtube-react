import React from 'react';
import SearchForm from './SearchForm'
import './MenuBar.css'

const MenuBar = (props) => {

    return (
        <div className="menu-bar">
            <SearchForm placeholder="Search videos" buttonTitle="Search!" onSearch={(value) => props.onSearch(value) }/>
        </div>
    );

}

export default MenuBar;