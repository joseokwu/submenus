import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSubmenu, closeSubmenu, openModal } = useGlobalContext();
  const handleHover = (e) => {
    const page = e.target.textContent;
    const btnProperties = e.target.getBoundingClientRect();
    const center = (btnProperties.left + btnProperties.right) / 2;
    const bottom = btnProperties.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleCloseSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleCloseSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openModal}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={handleHover}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={handleHover}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={handleHover}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
