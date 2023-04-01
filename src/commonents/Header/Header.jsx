import React from 'react';
import './Header.css';
const Header = () => {
    return (
      <nav className="header">
        <div>Knowledge Cafe</div>
        <div className='link'>
          <a  href="#">
            Home
          </a>
          <a  href="#">
            about
          </a>
          <a  href="#">
            content
          </a>
        </div>
      </nav>
    );
};

export default Header;