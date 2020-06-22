import React from 'react';
import './styles.scss';
import SearchBar from '../../elements/searchBar';

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <img src="/images/github-logo.png" alt="logo"></img>
            </div>
            <div className="searc-container">
            <SearchBar />
            </div>
        </nav>
    )
}

export default Header;