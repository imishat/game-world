import React from 'react';
import'./Header.css'
const Header = () => {
    return (
        <div>
           <div>
            <nav className='header'>
                <a className='logo' href="#">Game World</a>
                <div >
                    <a href="/shop">Home</a>
                    <a href="/orders">Next match</a>
                    <a href="/inventory">Game</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
        
        </div>
    );
};

export default Header;