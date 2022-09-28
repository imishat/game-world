import React from 'react';
import'./Header.css'
const Header = () => {
    return (
        <div>
           <div>
            <nav className='header'>
                <a className='logo' href="#">Game World</a>
                <div >
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
        
        </div>
    );
};

export default Header;